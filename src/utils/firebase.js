// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "gptnetflix-50ef3.firebaseapp.com",
  projectId: "gptnetflix-50ef3",
  storageBucket: "gptnetflix-50ef3.firebasestorage.app",
  messagingSenderId: "493057741650",
  appId: "1:493057741650:web:2c01f09a44a844c58fe08b",
  measurementId: "G-WD5873SG1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
