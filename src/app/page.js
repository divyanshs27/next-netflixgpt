"use client";
import Link from "next/link";
import Image from "next/image";
import Login from "./Login/page";
import Header from "./components/Header";
import { useState } from "react";
export default function Home() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className=" bg-white h-screen relative">
      <Header />
      <div className="absolute w-full h-full">
        <img src="netflixBg.jpg" alt="logo" className="w-full h-full object-cover" />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        {!isSignInForm && <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />}
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign up now.":"Already registered? Sign In Now."}</p>
      </form>
    </div>
  );
};
