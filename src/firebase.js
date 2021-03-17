import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAvlbBx2guYFbGSh-nibDz0JFj60WTPERY",
    authDomain: "linkedin-clone-2d3b0.firebaseapp.com",
    projectId: "linkedin-clone-2d3b0",
    storageBucket: "linkedin-clone-2d3b0.appspot.com",
    messagingSenderId: "802796547458",
    appId: "1:802796547458:web:b96e8c313c20ff94ecf39b",
    measurementId: "G-2GSYHLTTBH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};