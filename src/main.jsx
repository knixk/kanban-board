import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import clevertap from 'clevertap-web-sdk';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6yr9BwNGj22-qTEngVTS25DQZGo2aHGw",
  authDomain: "kanban-web-push.firebaseapp.com",
  projectId: "kanban-web-push",
  storageBucket: "kanban-web-push.appspot.com",
  messagingSenderId: "426626096067",
  appId: "1:426626096067:web:bb848660ef3be6e10afb76",
  measurementId: "G-7WFWQ4G1Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app, 'app')

let ctID = 'TEST-ZR7-475-RZ7Z';
clevertap.init(ctID, 'in1');
clevertap.privacy.push({optOut: false}) // Set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false})
clevertap.spa = true
clevertap.setLogLevel(3)


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
