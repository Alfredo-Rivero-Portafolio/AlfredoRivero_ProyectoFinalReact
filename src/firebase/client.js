import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
   apiKey: "AIzaSyC4xddZ15uQ0EH3akygm6dTxNb6XhEGw_A",
   authDomain: "myreactstore-ffa39.firebaseapp.com",
   projectId: "myreactstore-ffa39",
   storageBucket: "myreactstore-ffa39.appspot.com",
   messagingSenderId: "604479466656",
   appId: "1:604479466656:web:7a6b1032b4df11d769edc5"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);