import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCksIdpiC4YbRpnmQXnfXLbRH7rTV9uBTM",
  authDomain: "blog-5b043.firebaseapp.com",
  projectId: "blog-5b043",
  storageBucket: "blog-5b043.appspot.com",
  messagingSenderId: "1014198141863",
  appId: "1:1014198141863:web:0ee341fb07c3c5ace02c82"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, Provider, db };