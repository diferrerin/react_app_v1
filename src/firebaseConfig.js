// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEnNOjISEI-NQDy-Scox44520T2oAQ9Hk",
  authDomain: "reactappv1-5af54.firebaseapp.com",
  projectId: "reactappv1-5af54",
  storageBucket: "reactappv1-5af54.appspot.com",
  messagingSenderId: "508836584370",
  appId: "1:508836584370:web:acf5d5ab9559ce565162ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

export default db;