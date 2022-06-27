import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBrMPT3cCiggoOJjOIUgVwLzcm98irIQrU",
  authDomain: "ibolit-81078.firebaseapp.com",
  projectId: "ibolit-81078",
  storageBucket: "ibolit-81078.appspot.com",
  messagingSenderId: "461427519065",
  appId: "1:461427519065:web:48c7abbf1c5b4979e34b48",
};
initializeApp(firebaseConfig);

export const db = getFirestore();
