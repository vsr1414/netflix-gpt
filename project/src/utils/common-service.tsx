import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS3vcjHaHYYDKRnNcA48gbufNiuqvL82M",
  authDomain: "kingsman-netflix.firebaseapp.com",
  projectId: "kingsman-netflix",
  storageBucket: "kingsman-netflix.firebasestorage.app",
  messagingSenderId: "485213793232",
  appId: "1:485213793232:web:3404bd4081a6704e9ae7d5",
  measurementId: "G-3YSN2MVD42"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);