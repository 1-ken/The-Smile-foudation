import React from 'react'
import {FcGoogle} from 'react-icons/fc';
import { toast } from 'react-toastify';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc} from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router';


export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      console.log("Initiating Google sign-in...");
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Authenticated user: ", user);

      // Check if the user is in the database
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log("Checking if user exists in Firestore...");
      console.log("Document snapshot exists: ", docSnap.exists());

      if (!docSnap.exists()) {
        console.log("User does not exist in Firestore. Adding user...");
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
        console.log("User added to Firestore");
      } else {
        console.log("User already exists in Firestore");
      }

      navigate('/');
    } catch (error) {
      toast.error("Could not authorize with Google");
      console.error("Error during Google sign-in: ", error);
    }
  }
  return (
   <button type="button" onClick={onGoogleClick} className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-md active:shadow-md transition duration-150 ease-in-out rounded'>
   < FcGoogle className='bg-white text-2xl mr-2 rounded-full'  />
    Continue with Google
   </button>
  )
}
