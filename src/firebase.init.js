// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALj2mLjEzkCl_hoz-4qKSl57QyUHFYpdA",
  authDomain: "genius-car-services-2883f.firebaseapp.com",
  projectId: "genius-car-services-2883f",
  storageBucket: "genius-car-services-2883f.appspot.com",
  messagingSenderId: "198128736354",
  appId: "1:198128736354:web:c9cf4078abf8f176df593b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;