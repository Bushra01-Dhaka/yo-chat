// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDFunIVFas68-Jr5-ug5QympPDqikjruMQ",
  authDomain: "yo-chat-55f73.firebaseapp.com",
  projectId: "yo-chat-55f73",
  storageBucket: "yo-chat-55f73.appspot.com",
  messagingSenderId: "1056314942541",
  appId: "1:1056314942541:web:05e4e17fb0ccb8c7b7a804"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export const storage = getStorage();
export default auth;

