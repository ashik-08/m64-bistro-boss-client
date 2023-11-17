import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
// import axios from "axios";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login with email & password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // logout user
  const logOut = () => {
    // const loggedInUser = { email: user?.email };
    setLoading(true);
    // axios
    //   .post("https://m58-car-doctor-server.vercel.app/logout", loggedInUser, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    return signOut(auth);
  };

  // observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   const loggedInUser = { email: currentUser?.email };
      setUser(currentUser);
      setLoading(false);
      // if user exists then issue a token
    //   if (currentUser) {
    //     // get access token with axios
    //     axios
    //       .post("https://m58-car-doctor-server.vercel.app/jwt", loggedInUser, {
    //         withCredentials: true,
    //       })
    //       .then((res) => {
    //         console.log(res.data);
    //       });
    //   }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
