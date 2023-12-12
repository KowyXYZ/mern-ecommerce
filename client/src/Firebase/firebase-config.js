// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ptyIoRUwTFT3Mc7hmSCxWcOpml5Sgtg",
  authDomain: "ecommerce-71476.firebaseapp.com",
  projectId: "ecommerce-71476",
  storageBucket: "ecommerce-71476.appspot.com",
  messagingSenderId: "796755232",
  appId: "1:796755232:web:51c0ba2535bfc820384345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()