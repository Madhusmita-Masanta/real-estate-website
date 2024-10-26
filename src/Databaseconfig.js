import {initializeApp} from "firebase/app"// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    collection,
    addDoc
  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG5-jHHetTfFtl44NkEZyPXeRPkQ6CUxM",
  authDomain: "nextgenhomes-database.firebaseapp.com",
  projectId: "nextgenhomes-database",
  storageBucket: "nextgenhomes-database.appspot.com",
  messagingSenderId: "322872475805",
  appId: "1:322872475805:web:ae5fb01e4a60d64cd6d474",
  measurementId: "G-6YNE7M9NR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const handleNewContactsData = async (name, number, email, message, bookASiteVisit) => {
     await addDoc(collection(db, "contacts"), {
        name, 
        number, 
        email, 
        message, 
        bookASiteVisit
    });
  };