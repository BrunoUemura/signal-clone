import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFZAYy-CZOI6SUeVVCqrjY1lfMOLL16Po",
  authDomain: "signal-clone-50b0a.firebaseapp.com",
  projectId: "signal-clone-50b0a",
  storageBucket: "signal-clone-50b0a.appspot.com",
  messagingSenderId: "433962935374",
  appId: "1:433962935374:web:0e2b7b137256b28b2e4f1f",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
