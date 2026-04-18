// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw1OLNqEsPRVUvCFHzMZrALUhcAI9okYY",
  authDomain: "course-management-e0413.firebaseapp.com",
  projectId: "course-management-e0413",
  storageBucket: "course-management-e0413.firebasestorage.app",
  messagingSenderId: "59219528634",
  appId: "1:59219528634:web:77970d8438e11c61dfab83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);