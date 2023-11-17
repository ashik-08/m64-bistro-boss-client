import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import login from "../../assets/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const toastId = toast.loading("Registering User...");

    // create user
    createUser(data.email, data.password)
      .then(async (result) => {
        console.log(result.user);
        // update profile
        updateUserProfile(data.name, data.photo)
          .then(() => {
            // Profile updated!
          })
          .catch(() => {
            // An error occurred
          });
        // Logout and redirect to login page
        logOut()
          .then(() => {})
          .catch(() => {
            // An error occurred
          });

        toast.success("Registered Successfully.", { id: toastId });
        reset();
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        // check for duplicate email usage
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Email is in use already", { id: toastId });
        } else if (error.message === "Firebase: Error (auth/invalid-email).") {
          toast.error("Invalid Email", { id: toastId });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <section className="bg-authentication min-h-[100vh] py-6">
        <Container>
          <div className="bg-authentication shadow-bg flex flex-col xl:flex-row justify-center items-center gap-10">
            <div className="xl:w-1/2">
              <img className="mx-auto" src={login} alt="" />
            </div>
            <div className="w-full md:w-4/5 xl:w-1/2 p-8 md:px-28 md:py-16">
              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">
                Sign Up
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <span className="space-y-4">
                  <p className="text-lg font-semibold">Name</p>
                  <input
                    className="text-para w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                    type="text"
                    {...register("name")}
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </span>
                <span className="space-y-4">
                  <p className="text-lg font-semibold mt-8">Photo URL</p>
                  <input
                    className="text-para w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                    type="url"
                    {...register("photo")}
                    name="photo"
                    placeholder="Your Photo URL"
                    required
                  />
                </span>
                <span className="space-y-4">
                  <p className="text-lg font-semibold mt-8">Email</p>
                  <input
                    className="text-para w-full px-6 py-4 rounded-lg outline outline-1 outline-para"
                    type="email"
                    {...register("email")}
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
                    {...register("password", {
                      minLength: 6,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]).{6,}$/,
                    })}
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
                {errors.password && (
                  <p className="mt-3 text-red-500">
                    Password must contain one uppercase letter, one special
                    character, and not less than 6 characters.
                  </p>
                )}
                <span className="flex gap-3 mt-5">
                  <input type="checkbox" name="terms" required />
                  <p className="text-para mt-0.5">
                    I agree the
                    <a
                      href="#"
                      className="font-medium hover:text-blue-gray-800"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </p>
                </span>
                <button className="bg-title text-white text-xl font-semibold py-4 w-full rounded-lg my-8">
                  <input type="submit" value="Sign Up" />
                </button>
              </form>
              <p className="text-center text-para text-lg">
                Already have an account?{" "}
                <Link to="/login" className="text-title font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Register;
