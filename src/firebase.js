import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAxC57qlLQqymu5MN4HOK3DqcYpA1ux1II",
  authDomain: "projetfirebaseexo.firebaseapp.com",
  projectId: "projetfirebaseexo",
  storageBucket: "projetfirebaseexo.appspot.com",
  messagingSenderId: "316853752660",
  appId: "1:316853752660:web:1da2fd307a58d1d13aaec1",
  measurementId: "G-QCMPPSYL87",
};

// Initialize Firebase


// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
