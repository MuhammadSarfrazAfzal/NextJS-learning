
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDFF3fnuDfnzSFLDGk7tKWRSQxfyVaqjcQ",
  authDomain: "learning-auth-3cf07.firebaseapp.com",
  projectId: "learning-auth-3cf07",
  storageBucket: "learning-auth-3cf07.firebasestorage.app",
  messagingSenderId: "322524215236",
  appId: "1:322524215236:web:52cd3a2ac19271479e5691",
  measurementId: "G-C5DJWC8721"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)