
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAiwW1GqJA4D8XxCaEIRhRzGWHzMP3PsWc",
  authDomain: "ecommerce-1-68369.firebaseapp.com",
  projectId: "ecommerce-1-68369",
  storageBucket: "ecommerce-1-68369.firebasestorage.app",
  messagingSenderId: "982458787520",
  appId: "1:982458787520:web:8571d184c12751948e6f25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore();
export default db;