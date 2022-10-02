import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { useNavigate } from "react-router-dom";

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
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    // const navigate = useNavigate();
    const name = result.user.displayName;
    const profilePic = result.user.ProfilePic;
    // console.log(name);
    localStorage.setItem("name", name);
    localStorage.setItem("profilePic", profilePic);
    // navigate('/RegPage');
    window.location.reload(true);
  }).catch(error => console.log(error))
}

export const signOutWithGoogle = () => {
  signOut(auth).then(() => {
    // const navigate = useNavigate();
    // navigate('/Ulogin');

    localStorage.clear();
    window.location.reload(true);
    console.log("Signed Out");
  }).catch(error => console.log(error));
}
// --------------------------------------------
