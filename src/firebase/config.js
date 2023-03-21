// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD_Tt-RX-TTyrYUKMOLYIhRtiNAw3LYiNo",
  authDomain: "eshriny-7cb36.firebaseapp.com",
  projectId: "eshriny-7cb36",
  storageBucket: "eshriny-7cb36.appspot.com",
  messagingSenderId: "764999441477",
  appId: "1:764999441477:web:61eaae08226a720a6a572c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;