// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB6pTpc0RRN-TAvoympn8KHq78ljijYAA0",
  authDomain: "authapp-fea07.firebaseapp.com",
  projectId: "authapp-fea07",
  storageBucket: "authapp-fea07.appspot.com",
  messagingSenderId: "459465921576",
  appId: "1:459465921576:web:b9d080c40a333180d8111d",
  measurementId: "G-7E02G2QR8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export {auth,app,provider};