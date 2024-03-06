// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw3DQwZsApZcF2LhL9Gpx3AVV96Hm5_Wo",
  authDomain: "pnc-comany.firebaseapp.com",
  projectId: "pnc-comany",
  storageBucket: "pnc-comany.appspot.com",
  messagingSenderId: "710997818985",
  appId: "1:710997818985:web:55f6eba866f1976df0ecf8",
  measurementId: "G-RTGKFL66MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);