// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb8PFcU1iX4GIyAeuf9Y_yLe3u6LD1X8s",
  authDomain: "netflixgpt-ac687.firebaseapp.com",
  projectId: "netflixgpt-ac687",
  storageBucket: "netflixgpt-ac687.firebasestorage.app",
  messagingSenderId: "157086695244",
  appId: "1:157086695244:web:c1fff09adb9404ea5a19e9",
  measurementId: "G-M8RZ7FHDRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();