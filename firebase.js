// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4SUyQ0J8liZoyNibvXfOrUZa9oP5DnTU",
  authDomain: "krishibazar-44dd5.firebaseapp.com",
  projectId: "krishibazar-44dd5",
  storageBucket: "krishibazar-44dd5.firebasestorage.app",
  messagingSenderId: "63083649894",
  appId: "1:63083649894:web:3822edfd2ee84a7049c6a7",
  measurementId: "G-24C7W9RGNQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
