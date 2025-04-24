"use client";
import React,{ useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile   } from "firebase/auth";
import { useRouter } from "next/navigation";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const router = useRouter();
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(password.current.value);
    if(message) return;
    // Firebase logic
    if(!isSignInForm){
      // sign up logic  
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(error.message);
          console.log(errorCode + "-" +errorMessage)
          // ..
        });
    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(error.message);
          console.log(errorCode + "-" +errorMessage)
        });
    }
  };
  return (
    <div>
      <div className="absolute w-full h-full">
        <img
          src="netflixBg.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <form onSubmit={(e)=>{e.preventDefault();}} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>        
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
