import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeAvv1CgQPILTssisDHLIPREBtAL2HgUc",
  authDomain: "dash-7r2.firebaseapp.com",
  projectId: "dash-7r2",
  storageBucket: "dash-7r2.appspot.com",
  messagingSenderId: "526761531936",
  appId: "1:526761531936:web:fb3d08bb1d1ceea3e5fa45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);