// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdbuFs2zznsasn99YCVRjlFw6yCsSpPuw",
  authDomain: "ecommerce-db-2af9b.firebaseapp.com",
  projectId: "ecommerce-db-2af9b",
  storageBucket: "ecommerce-db-2af9b.firebasestorage.app",
  messagingSenderId: "679787535867",
  appId: "1:679787535867:web:4bba38d17e4473e540bf5e",
  measurementId: "G-W9KTLVXPYZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, additionalInformation = {}
) =>{
if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch(err) {
            console.log(err, 'error creating user')
        }
    }

    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if( !email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if( !email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}