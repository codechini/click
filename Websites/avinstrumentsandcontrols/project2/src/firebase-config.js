import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  // createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

import { useContext, createContext, useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDBqFZd3TXbvkliaAsVr_weowdcqNLAi8Q",
  authDomain: "avinstrumentsandcontrols-1.firebaseapp.com",
  projectId: "avinstrumentsandcontrols-1",
  storageBucket: "avinstrumentsandcontrols-1.appspot.com",
  messagingSenderId: "209800542281",
  appId: "1:209800542281:web:7f04f260333e51b5eee798",
  measurementId: "G-E3B8EJY5V1"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
// --------------------------------------------

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [users, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider)
  };

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
