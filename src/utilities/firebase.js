// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR886s_-yIxI0ZdXtxU8b0jHjFkmnmMOg",
  authDomain: "wevote-b3be5.firebaseapp.com",
  projectId: "wevote-b3be5",
  storageBucket: "wevote-b3be5.appspot.com",
  messagingSenderId: "454234567229",
  appId: "1:454234567229:web:0ca82b19943a09a8503054",
  measurementId: "G-D1HKT4EJGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);