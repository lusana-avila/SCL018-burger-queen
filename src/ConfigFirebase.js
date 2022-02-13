// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuvGa6IGYJv4zecQLE8GTrFm_b2Jc2T90",
  authDomain: "picsa-picsa.firebaseapp.com",
  projectId: "picsa-picsa",
  storageBucket: "picsa-picsa.appspot.com",
  messagingSenderId: "405599792394",
  appId: "1:405599792394:web:eed8f9acb34c589baa1ef3",
  measurementId: "G-MM47BRT7ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};