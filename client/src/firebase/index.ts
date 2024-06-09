// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIpzrhPbnSWu_bsmMzYEIIG3nVabPC1tw",
  authDomain: "vantage-fit-2f479.firebaseapp.com",
  projectId: "vantage-fit-2f479",
  storageBucket: "vantage-fit-2f479.appspot.com",
  messagingSenderId: "820130473016",
  appId: "1:820130473016:web:ae204112a1d9b246f2f2cd",
  measurementId: "G-R4WWNMJWPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{analytics, auth}
