import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD1nmQX4ttNJJo2AfIQJTqkSbHT2EsYtBk",
    authDomain: "auth-c04f7.firebaseapp.com",
    projectId: "auth-c04f7",
    storageBucket: "auth-c04f7.appspot.com",
    messagingSenderId: "460693051809",
    appId: "1:460693051809:web:4464d7dac45a650e4013e0"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();

  const auth=firebase.auth();

  export {auth};
  export default db;