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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;