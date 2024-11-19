// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database"; 
const firebaseConfig = {

  apiKey: "AIzaSyBLDMgAbT8xLR9u87GanHL2UM4wID5aX2o",

  authDomain: "klooio.firebaseapp.com",

  databaseURL: "https://klooio-default-rtdb.firebaseio.com",

  projectId: "klooio",

  storageBucket: "klooio.firebasestorage.app",

  messagingSenderId: "819082371021",

  appId: "1:819082371021:web:18c31c985c093ee2206e84",

  measurementId: "G-43T381J8E3"

};





// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app); 

// Export the initialized Firebase app
export { app, db };
