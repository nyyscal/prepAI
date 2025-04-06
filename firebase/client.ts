
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-sb17ZSeCRncvbEYWcMe8FasMW1OjQ-o",
  authDomain: "prepai-ca52f.firebaseapp.com",
  projectId: "prepai-ca52f",
  storageBucket: "prepai-ca52f.firebasestorage.app",
  messagingSenderId: "559556281501",
  appId: "1:559556281501:web:bde38b15e5f5bdcbf60074",
  measurementId: "G-C9T08THRQQ"
};

// Initialize Firebase
const app =  !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)