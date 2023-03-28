import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA-s6RWzR0hTpMpA4VYGV37uxOzPPKGXXM",
  authDomain: "instagram-clone-31d0e.firebaseapp.com",
  projectId: "instagram-clone-31d0e",
  storageBucket: "instagram-clone-31d0e.appspot.com",
  messagingSenderId: "1073684311508",
  appId: "1:1073684311508:web:3c78155acc2621406a3a41",
  measurementId: "G-QCKFC4NST4"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export { firebase };
export const db = app.firestore();
