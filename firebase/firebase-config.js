// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBFA-Iu6uh3RIwBqwaPJAz7HaxR7EMw00",
  authDomain: "basic-authen-514c8.firebaseapp.com",
  projectId: "basic-authen-514c8",
  storageBucket: "basic-authen-514c8.appspot.com",
  messagingSenderId: "759197318625",
  appId: "1:759197318625:web:7f7ecfcad7658bc46626a0",
  measurementId: "G-69SYTTY60T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
export const db = getFirestore(app);