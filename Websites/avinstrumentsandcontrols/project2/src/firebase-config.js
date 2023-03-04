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

const firebaseConfig = {"Your Config"};
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
