// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATuMD-hIaFW6qez0B1NTe5dOE9FxV8HYA",
    authDomain: "twitter-clone-b8ec3.firebaseapp.com",
    projectId: "twitter-clone-b8ec3",
    storageBucket: "twitter-clone-b8ec3.appspot.com",
    messagingSenderId: "668414516964",
    appId: "1:668414516964:web:ed8006187def01d4b156f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();