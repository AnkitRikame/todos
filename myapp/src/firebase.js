// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDInJyiQbGUbUAmU85Ib38R_tYmXzhrnSE",
    authDomain: "todoapp-146d5.firebaseapp.com",
    databaseURL: "https://todoapp-146d5.firebaseio.com",
    projectId: "todoapp-146d5",
    storageBucket: "todoapp-146d5.appspot.com",
    messagingSenderId: "1010685438634",
    appId: "1:1010685438634:web:dd4a7f26e33e8a5911fed3",
    measurementId: "G-B3BZDRH43Z"
});

const db = firebaseApp.firestore();
export default db;
  

