import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDLCqDsH_uquBAGqw-8ulpzeTUXd8ddH_k",
  authDomain: "entregareact-3757c.firebaseapp.com",
  projectId: "entregareact-3757c",
  storageBucket: "entregareact-3757c.appspot.com",
  messagingSenderId: "1000270854564",
  appId: "1:1000270854564:web:675066c1ecae00233aa931"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)