// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD80EoG-3hBsmuIOnqSnAC7LkEvCiRP8VA",
    authDomain: "genious-car-services-simple.firebaseapp.com",
    projectId: "genious-car-services-simple",
    storageBucket: "genious-car-services-simple.appspot.com",
    messagingSenderId: "771343434007",
    appId: "1:771343434007:web:f5adf29564a9b08bf3b752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;