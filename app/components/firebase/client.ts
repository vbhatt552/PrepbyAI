import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKR4odQdbCWmJ4rkP7fPx4D4rWqjohSTw",
  authDomain: "prepbyai.firebaseapp.com",
  projectId: "prepbyai",
  storageBucket: "prepbyai.firebasestorage.app",
  messagingSenderId: "548038445159",
  appId: "1:548038445159:web:c16313d8ab8300f7d46cc2",
  measurementId: "G-RNZS8T7VKP"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();


export const auth   = getAuth(app);
export const db = getFirestore(app);