import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGoDYeIijaAg2d-k7oGa2uEXpNvwwKXxY",
  authDomain: "todolist-9cd66.firebaseapp.com",
  projectId: "todolist-9cd66",
  storageBucket: "todolist-9cd66.appspot.com",
  messagingSenderId: "734592459853",
  appId: "1:734592459853:web:beb3cd8d14e7cbe00d2804",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(db);
