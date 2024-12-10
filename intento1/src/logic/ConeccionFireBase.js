// src/services/ConeccionFireBase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvMsZp8f4_hMPusT_711hssaFlbOMO-Lo",
  authDomain: "midulcetesoro-efa49.firebaseapp.com",
  projectId: "midulcetesoro-efa49",
  storageBucket: "midulcetesoro-efa49.appspot.com",
  messagingSenderId: "369829210521",
  appId: "1:369829210521:web:23ab2fd1767dda5c0dcb08",
  measurementId: "G-S1DLRT2D3H",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
