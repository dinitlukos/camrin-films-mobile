// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE0Lvb_MzDQmpZlA896ge6P64oDF_E3w8",
  authDomain: "dh-wedding-reception.firebaseapp.com",
  projectId: "dh-wedding-reception",
  storageBucket: "dh-wedding-reception.firebasestorage.app",
  messagingSenderId: "221663583843",
  appId: "1:221663583843:web:ed3b217c3a3a342b206256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)