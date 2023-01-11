import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQpHgdNa7jQ64AvXTyP0K_zUyCC9hyziQ",
  authDomain: "disneyclone-9b4b7.firebaseapp.com",
  projectId: "disneyclone-9b4b7",
  storageBucket: "disneyclone-9b4b7.appspot.com",
  messagingSenderId: "770577700883",
  appId: "1:770577700883:web:92489c65ff299e8ef1c7e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
