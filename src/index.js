import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import App from './App';
import reportWebVitals from './reportWebVitals';

var firebaseConfig = {
  apiKey: "AIzaSyCqRhwJOHq9LDiagRhwV_q5a7jFYyBzxlM",
  authDomain: "react-and-firebase-ffd0d.firebaseapp.com",
  projectId: "react-and-firebase-ffd0d",
  storageBucket: "react-and-firebase-ffd0d.appspot.com",
  messagingSenderId: "225614522817",
  appId: "1:225614522817:web:ebba14395b686912ab6740",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
