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

const database = firebase.database();

database.ref().set({
  name: 'Arlen Peiffer',
  age: 31,
  isSingle: false,
  location: {
    city: 'Los Angeles',
    country: 'United States'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(32);
database.ref('location/city').set('South Pasadena');

database.ref('attributes').set({
  height: 70,
  weight: 135
});
