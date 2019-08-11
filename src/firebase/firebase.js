import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC3tuPV_fb3hu5r7RAdQtj_gOw6FzfW8ww",
  authDomain: "expensify-bf65e.firebaseapp.com",
  databaseURL: "https://expensify-bf65e.firebaseio.com",
  projectId: "expensify-bf65e",
  storageBucket: "",
  messagingSenderId: "198773664224",
  appId: "1:198773664224:web:351f83104282054b"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: 'Arlen Peiffer'
});
