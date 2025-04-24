'use client';
import {useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { signOut } from 'firebase/auth';
import React, { use } from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";
const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    // Sign out logic here
   signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign out successful")
     router.push("/");
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error:", error);
      router.push("/error");
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid,email,displayName}));
        router.replace("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        router.replace("/");
      }
    });
    return () => {unsubscribe();}
  }, []);
  return (
    <div className=' absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center w-full'> 
      <img className='w-44' 
      src={LOGO} alt="logo"></img>
      <div className='flex p-2'>
        <img className='w-12 h-12 ' 
        src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="logo"></img>
        <button onClick={handleSignOut}
        className='p-2 font-bold'>(Sign out)</button>
      </div>
    </div>
    
  )
}

export default Header