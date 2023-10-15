// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyk8QKEKqYtG4cvswOOPx6y2633Nv5N78",
  authDomain: "chat-app-4f8a1.firebaseapp.com",
  projectId: "chat-app-4f8a1",
  storageBucket: "chat-app-4f8a1.appspot.com",
  messagingSenderId: "579896581027",
  appId: "1:579896581027:web:8b6c197b2c1ea0808c1816",
  measurementId: "G-18YD58T36F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);