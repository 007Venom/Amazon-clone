
import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIrh0Ktv9Ak0Oth3XzfDqoJob5V8tZeoo",
  authDomain: "clone-bcb83.firebaseapp.com",
  databaseURL: "https://clone-bcb83.firebaseio.com",
  projectId: "clone-bcb83",
  storageBucket: "clone-bcb83.appspot.com",
  messagingSenderId: "878916968225",
  appId: "1:878916968225:web:7d2eeea30b4ea73d36a860",
  measurementId: "G-NG3YRY9J29"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();


export {db,auth};