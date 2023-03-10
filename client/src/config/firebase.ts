import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLEq46rnzRMuvasOvFkyLtz3cA8bW2Oh4",
  authDomain: "authentication--firebase.firebaseapp.com",
  projectId: "authentication--firebase",
  storageBucket: "authentication--firebase.appspot.com",
  messagingSenderId: "423607789744",
  appId: "1:423607789744:web:9d4d636de273cdebf5b375",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
