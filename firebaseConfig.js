// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9jOYhkMEHCPzeJacBoDwume05Ebq-ttM",
  authDomain: "native-6e38b.firebaseapp.com",
  projectId: "native-6e38b",
  storageBucket: "native-6e38b.appspot.com",
  messagingSenderId: "1057714922351",
  appId: "1:1057714922351:web:8328cc4e00830c6ee4be9a",
  measurementId: "G-DME3KE9GKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);