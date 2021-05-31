import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCmqlhK6GeG8KCEuWUIsfSH7CJnGyizCcg',
  authDomain: 'crwn-db-972b5.firebaseapp.com',
  projectId: 'crwn-db-972b5',
  storageBucket: 'crwn-db-972b5.appspot.com',
  messagingSenderId: '914160844138',
  appId: '1:914160844138:web:bec1bee1d29f873cd1b913',
  measurementId: 'G-JKE33HV6Q7',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.messages);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
