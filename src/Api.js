import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseconfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
  fbPopup:async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider);
    return result;
  },
  addUser:async (u) => {    
    await db.collection('users').doc(u.id).set({
      name: (u.name ? u.name : 'Sem nome'),
      avatar: (u.avatar ? u.avatar : 'https://www.w3schools.com/howto/img_avatar.png')
    }, {merge: true});
  }
}
