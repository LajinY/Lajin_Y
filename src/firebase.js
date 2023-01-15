import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmnny_E-wFpCmWeEfLSVKWk97wUclG35c",
  authDomain: "netflix-clone-3b604.firebaseapp.com",
  projectId: "netflix-clone-3b604",
  storageBucket: "netflix-clone-3b604.appspot.com",
  messagingSenderId: "413053936756",
  appId: "1:413053936756:web:b2752c78efbb51700d1d21",
  measurementId: "G-RMQY51QFQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
