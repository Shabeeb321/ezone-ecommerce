
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "ezone-e3898.firebaseapp.com",
  projectId: "ezone-e3898",
  storageBucket: "ezone-e3898.appspot.com",
  messagingSenderId: "717159677526",
  appId: "1:717159677526:web:6e729715f85df4668005f7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app