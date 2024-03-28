import {initializeApp} from "firebase/app";
import{ getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDMwvbcAI9n9huVdl0WfM2dLo0pjz_f0rU",
  authDomain: "clothing-app-12125.firebaseapp.com",
  projectId: "clothing-app-12125",
  storageBucket: "clothing-app-12125.appspot.com",
  messagingSenderId: "1024659670725",
  appId: "1:1024659670725:web:b6da45b2affcb90af1d2ac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)