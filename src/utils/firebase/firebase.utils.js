// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch(err) {
            console.log(err, 'error creating user')
        }
    }

    return userDocRef;
}
