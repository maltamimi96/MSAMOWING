// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9SU88PSs-0Nh-O-A8dd3KGm1LiTrw-dw",
  authDomain: "msamowing-f8bb5.firebaseapp.com",
  projectId: "msamowing-f8bb5",
  storageBucket: "msamowing-f8bb5.appspot.com",
  messagingSenderId: "789966509960",
  appId: "1:789966509960:web:30023e504c467fd44a4c3d",
  measurementId: "G-V7TH5NNXCL",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)
