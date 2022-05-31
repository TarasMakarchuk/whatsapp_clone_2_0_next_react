import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLpOsq10DQmEkMH1u2smOIW4YpIHp4CKo",
    authDomain: "whatsapp-clone-2-b0b59.firebaseapp.com",
    projectId: "whatsapp-clone-2-b0b59",
    storageBucket: "whatsapp-clone-2-b0b59.appspot.com",
    messagingSenderId: "299183587542",
    appId: "1:299183587542:web:d9f02e1a148a4ad316c977"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
