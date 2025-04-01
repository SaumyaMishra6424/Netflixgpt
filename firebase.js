// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBrKLt5nSGPAYcJizs5v9rIEBTjKhxO8U",
  authDomain: "netflixgpt-14e76.firebaseapp.com",
  projectId: "netflixgpt-14e76",
  storageBucket: "netflixgpt-14e76.firebasestorage.app",
  messagingSenderId: "803425263619",
  appId: "1:803425263619:web:401824a938a6f4fe4a2e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

