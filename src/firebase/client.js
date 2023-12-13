import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCv3YEyo0Lrr5rFZccgWZL9dqLJFTADjxU",
    authDomain: "proyect-react-31f28.firebaseapp.com",
    projectId: "proyect-react-31f28",
    storageBucket: "proyect-react-31f28.appspot.com",
    messagingSenderId: "391113882320",
    appId: "1:391113882320:web:285b77b8c8ca169a433cd5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);