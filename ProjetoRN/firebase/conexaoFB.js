import firebase from 'firebase';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyCySu2QHMn-jcbX7ixTP2Bsmst8TSqX31g",
    authDomain: "projetorn-fb-e98b5.firebaseapp.com",
    projectId: "projetorn-fb-e98b5",
    storageBucket: "projetorn-fb-e98b5.appspot.com",
    messagingSenderId: "206898895034",
    appId: "1:206898895034:web:785bdbde4af98acdc2ca83",
    measurementId: "G-LCGKM51D6Y"
  };

  var app = firebase.initializeApp(firebaseConfig);

  export const conexaoFS = app.firestore();
  