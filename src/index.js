import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

var firebaseConfig = {
  apiKey: "AIzaSyC2j6KoRP1ksyqRgR5fDHPCniW-YafgWkI",
  authDomain: "shopping-cart-3889a.firebaseapp.com",
  projectId: "shopping-cart-3889a",
  storageBucket: "shopping-cart-3889a.appspot.com",
  messagingSenderId: "961349540519",
  appId: "1:961349540519:web:8a4820557b150f7a085982",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
