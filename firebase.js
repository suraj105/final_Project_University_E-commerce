// This import loads the firebase namespace.
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// These imports load individual services into the firebase namespace.

const firebaseConfig = {
  apiKey: "AIzaSyDdYwGbsuM69tRBR-wlhfpi5ABBUMa9hI4",
  authDomain: "apex-shoppers.firebaseapp.com",
  projectId: "apex-shoppers",
  storageBucket: "apex-shoppers.appspot.com",
  messagingSenderId: "1012850720758",
  appId: "1:1012850720758:web:34464845221456246b51d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;
