// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS3vcjHaHYYDKRnNcA48gbufNiuqvL82M",
  authDomain: "kingsman-netflix.firebaseapp.com",
  projectId: "kingsman-netflix",
  storageBucket: "kingsman-netflix.firebasestorage.app",
  messagingSenderId: "485213793232",
  appId: "1:485213793232:web:3404bd4081a6704e9ae7d5",
  measurementId: "G-3YSN2MVD42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);