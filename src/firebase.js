import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAqvj8uEwuy5DIJLML3QhBVA5YES3bto6I",
  authDomain: "linkdin-69862.firebaseapp.com",
  projectId: "linkdin-69862",
  storageBucket: "linkdin-69862.appspot.com",
  messagingSenderId: "135268364986",
  appId: "1:135268364986:web:b4e19bcc5375fb84a3c883"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()
const storage=firebase.storage()

export {auth,provider,storage}
export default db
// firebase deploy --only hosting:linkdin-clone-38f66