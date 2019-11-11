import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDKE01SNtiVPxbinB70oMU5x_MLs27mVGg",
  authDomain: "elevator-e76dd.firebaseapp.com",
  databaseURL: "https://elevator-e76dd.firebaseio.com",
  projectId: "elevator-e76dd",
  storageBucket: "",
  messagingSenderId: "862142352767",
  appId: "1:862142352767:web:ff227472c2ed9b84ed5e4a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
