// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLD5i4R9oMFPnWew2E6kbSo-ZR0qUFMdI",
  authDomain: "smile-foudation.firebaseapp.com",
  projectId: "smile-foudation",
  storageBucket: "smile-foudation.appspot.com",
  messagingSenderId: "532699074786",
  appId: "1:532699074786:web:59d2f18139aaa14046cebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);