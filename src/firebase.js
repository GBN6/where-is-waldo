import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCO78YDyKtKRyGEO0beMOxITJUvZf15nFU",
  authDomain: "waldo-ed44a.firebaseapp.com",
  projectId: "waldo-ed44a",
  storageBucket: "waldo-ed44a.appspot.com",
  messagingSenderId: "123616331567",
  appId: "1:123616331567:web:e86174464abd71d49e43da"
};

const app = firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();
export const auth = app.auth();
export default app