import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "REMOVED_API_KEY",
  authDomain: "expense-app-bc386.firebaseapp.com",
  databaseURL: "https://expense-app-bc386-default-rtdb.firebaseio.com",
  projectId: "expense-app-bc386",
  storageBucket: "expense-app-bc386.firebasestorage.app",
  messagingSenderId: "688106711236",
  appId: "1:688106711236:web:3aad029f36cf9bc9488191"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
