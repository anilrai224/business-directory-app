import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYibvP0ThStyf2CNWUq1q8OSxWeHqYjwk",
  authDomain: "react-native-project-10ba8.firebaseapp.com",
  projectId: "react-native-project-10ba8",
  storageBucket: "react-native-project-10ba8.appspot.com",
  messagingSenderId: "221234766553",
  appId: "1:221234766553:web:a10084d9138616fa1614c8",
  measurementId: "G-V37Q9RZBQM"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)