// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage,ref} from "firebase/storage";
import {collection, getFirestore,getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzFjjoZd5Qj_KQavjhQwlM5WCdtgPGLwc",
  authDomain: "between-tags2.firebaseapp.com",
  projectId: "between-tags2",
  storageBucket: "between-tags2.appspot.com",
  messagingSenderId: "162033177220",
  appId: "1:162033177220:web:517e43026ba2483bc368d1",
  measurementId: "G-YDB5LD6KJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//FireStore
export const storage = getStorage(app);



