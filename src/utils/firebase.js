// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-cddc2.firebaseapp.com",
  projectId: "blog-cddc2",
  storageBucket: "blog-cddc2.appspot.com",
  messagingSenderId: "413696194974",
  appId: "1:413696194974:web:bc0a551cd5558bdf0dbe8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);