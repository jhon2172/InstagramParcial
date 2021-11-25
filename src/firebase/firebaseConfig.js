// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpU9Gf0bafp8Wg1_eem1S6dTDDdWbYI6w",
  authDomain: "instagram-9c93d.firebaseapp.com",
  projectId: "instagram-9c93d",
  storageBucket: "instagram-9c93d.appspot.com",
  messagingSenderId: "389182627895",
  appId: "1:389182627895:web:33b7fe21e2cbb8c6691fb2",
  measurementId: "G-DQMS4R71G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);