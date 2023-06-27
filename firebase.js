// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Sg6CeSBvfzYaQ_PFuefJPKSGmvlWtQk",
  authDomain: "weather-app-76e7d.firebaseapp.com",
  projectId: "weather-app-76e7d",
  storageBucket: "weather-app-76e7d.appspot.com",
  messagingSenderId: "857963579823",
  appId: "1:857963579823:web:5f5ef8c4badca234af475a",
  measurementId: "G-X95ZGH6ZZH"
};



// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app= firebase.app;
}

const auth = firebase.auth();

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); //Was not in the video

const db = getFirestore(app);

export { auth, db };