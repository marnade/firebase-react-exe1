import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxC57qlLQqymu5MN4HOK3DqcYpA1ux1II",
  authDomain: "projetfirebaseexo.firebaseapp.com",
  projectId: "projetfirebaseexo",
  storageBucket: "projetfirebaseexo.appspot.com",
  messagingSenderId: "316853752660",
  appId: "1:316853752660:web:1da2fd307a58d1d13aaec1",
  measurementId: "G-QCMPPSYL87",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
