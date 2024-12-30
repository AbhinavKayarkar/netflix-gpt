// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn5gEWlPZ77dQSSV-wKeL7RRvrX5sOrQU",
  authDomain: "netflix-gpt-9e6d4.firebaseapp.com",
  projectId: "netflix-gpt-9e6d4",
  storageBucket: "netflix-gpt-9e6d4.firebasestorage.app",
  messagingSenderId: "53195263518",
  appId: "1:53195263518:web:775b88c3bb0e90535e280f",
  measurementId: "G-2QKC65ELGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
