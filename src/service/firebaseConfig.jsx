// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prep-master-e1138.firebaseapp.com",
  projectId: "prep-master-e1138",
  storageBucket: "prep-master-e1138.firebasestorage.app",
  messagingSenderId: "879453703282",
  appId: "1:879453703282:web:9cd75d078781a5adea86eb",
  measurementId: "G-V4JB0P668S"
};



// const firebaseConfig = {
//   apiKey: "AIzaSyBh9iDKoIvI3-k5W5kxliEe8F6DNcIlo8Y",
//   authDomain: "prep-master-e1138.firebaseapp.com",
//   projectId: "prep-master-e1138",
//   storageBucket: "prep-master-e1138.firebasestorage.app",
//   messagingSenderId: "879453703282",
//   appId: "1:879453703282:web:386b6d6c0ccf7b90ea86eb",
//   //measurementId: "G-DS3935ZN33"
// };










// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
