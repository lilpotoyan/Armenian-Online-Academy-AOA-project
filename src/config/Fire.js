import firebase from "firebase"

  const config = {
    apiKey: "AIzaSyBiEWQUxFplchxzCOXYSI4GKIYR3Ejt5XM",
    authDomain: "armenian-online-academy.firebaseapp.com",
    databaseURL: "https://armenian-online-academy.firebaseio.com",
    projectId: "armenian-online-academy",
    storageBucket: "armenian-online-academy.appspot.com",
    messagingSenderId: "151031375700"
  };
  const fire = firebase.initializeApp(config);

  export default fire;

  export const database = firebase.database();
