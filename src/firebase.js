import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK4GRo9dlClVBdU1tMJL-kCM0oPzdt8Z4",
    authDomain: "clone-yt-cd51b.firebaseapp.com",
    projectId: "clone-yt-cd51b",
    storageBucket: "clone-yt-cd51b.appspot.com",
    messagingSenderId: "365591658470",
    appId: "1:365591658470:web:955091e2d9aa46fdac6027",
    measurementId: "G-TBYXL1D6DZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const authProvider = new firebase.auth.GoogleAuthProvider();
 
  export {db,auth,authProvider};