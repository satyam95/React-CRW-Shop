import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAcPbB5beR-P1KsWnkqFxdfqEnwvvgw6HE",
        authDomain: "crwn-db-ad133.firebaseapp.com",
        databaseURL: "https://crwn-db-ad133.firebaseio.com",
        projectId: "crwn-db-ad133",
        storageBucket: "crwn-db-ad133.appspot.com",
        messagingSenderId: "900559452125",
        appId: "1:900559452125:web:1a786d941209b21ab5e834"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;