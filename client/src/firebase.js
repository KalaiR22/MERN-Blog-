// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4da65.firebaseapp.com",
  projectId: "mern-blog-4da65",
  storageBucket: "mern-blog-4da65.appspot.com",
  messagingSenderId: "489194847623",
  appId: "1:489194847623:web:3cef0a97ddbaba733d2722"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);