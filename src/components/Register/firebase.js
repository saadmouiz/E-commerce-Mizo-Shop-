// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzoloBU6FJydeEFw6jLPQIoFfSLNal3wc",
  authDomain: "ecomm-dde5a.firebaseapp.com",
  projectId: "ecomm-dde5a",
  storageBucket: "ecomm-dde5a.appspot.com",
  messagingSenderId: "53110570547",
  appId: "1:53110570547:web:e0d9eae1c75723397b6d46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore(app)
export default app