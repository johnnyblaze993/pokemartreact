import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCvlbDW-1mOFF3b62BwQwQ3X_CcPg3umRA',
  authDomain: 'store-7d90d.firebaseapp.com',
  projectId: 'store-7d90d',
  storageBucket: 'store-7d90d.appspot.com',
  messagingSenderId: '738473064443',
  appId: '1:738473064443:web:b86394b3342df074537d5e',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();

// const provider = new GoogleAuthProvider();
