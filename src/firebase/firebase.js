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

export { firebase, database as default };

// // child_removed
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// // child_changed
// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// // child_added
// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref('expenses').push({
// //   description: 'Gum',
// //   note: '',
// //   amount: 195,
// //   createdAt: 0
// // });

// // database.ref('notes/-LmAhbxLbR3lmbiBpgEZ').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });

// // database.ref().set({
// //   name: 'Arlen',
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Amazon'
// //   }
// // });

// // database.ref().on('value', snapshot => {
// //   const { name, job } = snapshot.val();
// //   const { title, company } = job;
// //   console.log(`${name} is a ${title} at ${company}`);
// // });

// // database.ref('job').update({
// //   title: 'Software Crafter',
// //   company: '8th Light'
// // });

// // database.ref()
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((error) => {
// //     console.log('Error fetching data', error);
// //   });

// // database.ref().set({
// //   name: 'Arlen Peiffer',
// //   age: 31,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Los Angeles',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((error) => {
// //   console.log('This failed.', error);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((error) => {
// //     console.log('Data was not removed', error)
// //   });
