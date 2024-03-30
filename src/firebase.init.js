// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgwmQYinpvkHdQfSUYcRzIq3xHgqs18a4",
  authDomain: "volunteer-network-30098.firebaseapp.com",
  projectId: "volunteer-network-30098",
  storageBucket: "volunteer-network-30098.appspot.com",
  messagingSenderId: "808858751897",
  appId: "1:808858751897:web:45d0e3bbb12a323cd93908",
  measurementId: "G-4W5F8B1PTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;