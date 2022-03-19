import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBv2vSAVlxj-_YFrk6QHejkrLsXCPJy4kU',
  authDomain: 'crown-clothing-db-adf9c.firebaseapp.com',
  projectId: 'crown-clothing-db-adf9c',
  storageBucket: 'crown-clothing-db-adf9c.appspot.com',
  messagingSenderId: '730463833649',
  appId: '1:730463833649:web:e21ad5e616bfee72034f10',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize Firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log('Error creating the user', err);
    }
  }

  return userDocRef;
};
