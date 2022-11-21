import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyALyF3s6c6klu-Q3gLojTNnKhBiWAZkI5U",
    authDomain: "twitter-clonee-6d04f.firebaseapp.com",
    projectId: "twitter-clonee-6d04f",
    storageBucket: "twitter-clonee-6d04f.appspot.com",
    messagingSenderId: "910499060795",
    appId: "1:910499060795:web:bbf03d3b0c0460af07d01e",
    measurementId: "G-293QJTTJN9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export  {db};