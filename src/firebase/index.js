import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzgJZ90D_5V23E-MeznP9pJr-5KdwcZpM",
  authDomain: "animals-9bae7.firebaseapp.com",
  projectId: "animals-9bae7",
  storageBucket: "animals-9bae7.appspot.com",
  messagingSenderId: "557037172135",
  appId: "1:557037172135:web:49923d316e264bc03a7282",
  measurementId: "G-9M5R3C6LQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}