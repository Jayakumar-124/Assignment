// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// Firebase Auth
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCP0V6WSEzEW4dSiwthyEIcUGtfOJyYzoo",
  authDomain: "assignment-4b0c1.firebaseapp.com",
  projectId: "assignment-4b0c1",
  storageBucket: "assignment-4b0c1.appspot.com", // <- corrected
  messagingSenderId: "237122971418",
  appId: "1:237122971418:web:7b97e7d666072bcfc32ea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Export modules
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
};