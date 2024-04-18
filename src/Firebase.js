import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyANvIYvj0JYSqrwM0MOewWf-3G1OwI_oLQ",
  authDomain: "green-6f3cf.firebaseapp.com",
  projectId: "green-6f3cf",
  storageBucket: "green-6f3cf.appspot.com",
  messagingSenderId: "68399373954",
  appId: "1:68399373954:web:56bc155789eb38fc1bde9b",
  measurementId: "G-Q7BJF8K28C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { auth, db };