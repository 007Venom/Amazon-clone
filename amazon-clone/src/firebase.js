// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCPrm-WKv1mIvsT4MOG5kuzrXc0aP3RDC4",
  authDomain: "clone-4093d.firebaseapp.com",
  databaseURL: "https://clone-4093d.firebaseio.com",
  projectId: "clone-4093d",
  storageBucket: "clone-4093d.appspot.com",
  messagingSenderId: "664282383791",
  appId: "1:664282383791:web:ecbfc8cb7105c431015b5a",
  measurementId: "G-BZWGM1K7V9"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();


export {db,auth};