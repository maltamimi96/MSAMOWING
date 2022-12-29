// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ylHWFcScp2u69mVIJEHNxhx8xDSkwR0",
  authDomain: "msa-mowing.firebaseapp.com",
  projectId: "msa-mowing",
  storageBucket: "msa-mowing.appspot.com",
  messagingSenderId: "180972197380",
  appId: "1:180972197380:web:22280e2251958f3897c751",
  measurementId: "G-52VN15P141",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)
