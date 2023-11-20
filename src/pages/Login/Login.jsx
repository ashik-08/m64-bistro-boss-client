import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/authentication.png";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    // console.log(value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    const toastId = toast.loading("Logging In...");

    // signIn user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully.", { id: toastId });
        form.reset();
        // navigate(location?.state ? location?.state : "/");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        // check for invalid credential
        if (
          error.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          toast.error("Invalid Email or Password", {
            id: toastId,
          });
        }
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(async (result) => {
        console.log(result.user);

        // add new user to the database
        const createdAt = result.user?.metadata?.creationTime;
        const user = {
          name: result.user?.displayName,
          photo: result.user?.photoURL,
          email: result.user?.email,
          password: "",
          createdAt: createdAt,
        };

        try {
          const response = await axiosPublic.post("/users", user);
          if (response.data.insertedId) {
            toast.success("User Created Successfully.");
          } else if (response.data.message === "Already exists") {
            console.log("User already exist.");
          }
        } catch (error) {
          console.error(error);
          toast.error(error.message);
        }

        toast.success("Logged In Successfully.");
        // navigate(location?.state ? location?.state : "/");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        if (
          error.message ===
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          toast.error("Account exists with different credential.");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <section className="bg-authentication py-16">
        <Container>
          <div className="bg-authentication shadow-bg flex flex-col xl:flex-row justify-center items-center gap-10">
            <div className="flex-1 w-full">
              <img className="mx-auto" src={login} alt="" />
            </div>
            <div className="p-8 md:px-28 md:py-16">
              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">
                Sign In
              </h1>
              <form onSubmit={handleLogin}>
                <span className="space-y-4">
                  <p className="text-lg font-semibold">Email</p>
                  <input
                    className="text-para w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </span>
                <span className="space-y-4 relative">
                  <p className="text-lg font-semibold mt-8">Password</p>
                  <input
                    className="text-para w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    required
                  />
                  <span
                    className="absolute bottom-0 right-3"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </span>
                <div className="mt-6 mb-4">
                  <LoadCanvasTemplate />
                </div>
                <span className="relative">
                  <input
                    className="text-para w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                    type="text"
                    name="captcha"
                    placeholder="Enter above text"
                    ref={captchaRef}
                    required
                  />
                  <span
                    onClick={handleValidateCaptcha}
                    className="btn btn-ghost btn-xs absolute -top-0.5 right-2"
                  >
                    <PiCaretDoubleRightBold />
                  </span>
                </span>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  className="text-para hover:text-blue-gray-800 font-semibold hover:text-head mt-5"
                >
                  Forgot password?
                </button>
                <button
                  disabled={disabled}
                  className={`bg-title text-white text-xl font-semibold py-4 w-full rounded-lg my-8 ${
                    disabled && "bg-[#d1a25bb2]"
                  }`}
                >
                  <input type="submit" value="Sign In" />
                </button>
              </form>
              <div>
                <p className="text-center text-lg font-medium">
                  Or Sign In with
                </p>
                <div className="flex justify-center items-center gap-4 mt-8 mb-12">
                  <button
                    onClick={handleGoogleSignIn}
                    className="bg-[#F5F5F8] p-3 rounded-full outline outline-1"
                  >
                    <FaGoogle></FaGoogle>
                  </button>
                  <button
                    //   onClick={handleFacebookSignIn}
                    className="bg-[#F5F5F8] p-3 rounded-full outline outline-1"
                  >
                    <FaFacebook></FaFacebook>
                  </button>
                  <button
                    //   onClick={handleGithubSignIn}
                    className="bg-[#F5F5F8] p-3 rounded-full outline outline-1"
                  >
                    <FaGithub></FaGithub>
                  </button>
                </div>
                <p className="text-center text-para text-lg">
                  Not registered yet?{" "}
                  <Link to="/register" className="text-title font-semibold">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
        {/* password reset modal */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box flex justify-center text-center">
            <form
              //   onSubmit={handleForgetPass}
              className="mt-8 w-72 md:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <p className="text-lg font-semibold">Enter Your Email</p>
                <input
                  className="text-para w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <button className="bg-title text-white font-medium py-3 w-full rounded-lg my-6">
                <input type="submit" value="Send Password Reset Link" />
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </section>
    </>
  );
};

export default Login;
