// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTV_-eu1E9zDtZT8AOF9zyVwNCAsisA8",
  authDomain: "netflixgpt-f2b8c.firebaseapp.com",
  projectId: "netflixgpt-f2b8c",
  storageBucket: "netflixgpt-f2b8c.firebasestorage.app",
  messagingSenderId: "26567259939",
  appId: "1:26567259939:web:a8da617f5bf0a4730cfe96",
  measurementId: "G-GKBECJRDZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();