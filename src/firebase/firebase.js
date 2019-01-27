import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// database.ref().set({
//   name: 'Lukasz Kowalski',
//   age: 28,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'intive'
//   },
//   location: {
//     city: 'Szczecin',
//     country: 'Poland'
//   }
// }).then(() => {
//   console.log('Done');
// }).catch(err => console.log(err));

// database.ref('age').set(29);
// database.ref('location/city').set('Koszalin');

// database.ref('isSingle').remove()
// .then(() => console.log('removed'))
// .catch(err => console.log(err));

// database.ref('isSingle').set(null)
// .then(() => console.log('removed!'))
// .catch(err => console.log(err));

// database.ref().update({
//   name: 'Grzegorz Brzęczyszczykiewicz',
//   age: 50,
//   job: 'Soldier',
//   isSingle: null
// })
// .then(() => console.log('Changed!'))
// .catch(err => console.log(err));

// database.ref().update({
//   job: 'PM',
//   'location/city': 'Poznań'
// })
// .then(() => console.log('Updated!'))
// .catch(err => console.log(err));

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })
// .then(() => console.log('Job changed'))
// .catch(err => console.log(err));

// database.ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch(e => console.log(e))

// const onValueChange = database.ref()
//   .on('value', snapshot => console.log(snapshot.val())), e => console.log(e) //no promise, just callback

// setTimeout(() => {
//   database.ref().update({
//     age: 29
//   })
// }, 3500)


// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 4500)


// setTimeout(() => {
//   database.ref().update({
//     age: 30
//   })
// }, 5500)

// const onValueChange = database.ref().on('value', snapshot => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, e => console.log('error: ', e))

// database.ref().update({
//   name: 'Mike',
//   'job/title': 'PM',
//   'job/company': 'Google'
// })

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Native'
// })

// database.ref('notes/-LULFAYtMQqO90eRGGDP').remove()

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'until 25.10',
//   amount: 800,
//   createdAt: 35345343232
// })

// database.ref('expenses').push({
//   description: 'Water',
//   note: 'until 25.10',
//   amount: 100,
//   createdAt: 35345343232
// })

// database.ref('expenses').push({
//   description: 'Power',
//   note: 'until 25.10',
//   amount: 50,
//   createdAt: 35345343232
// })

// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = []
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//       })
//     })
  
//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'Clothes',
//   note: 'until 25.10',
//   amount: 200,
//   createdAt: 35345343232
// })

// const onValueChange = database.ref('expenses').on('value', snapshot => {
//   const expenses = []
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot
//     })
//   })
//   console.log(expenses)
// }, e => console.log('error occured:', e))

// database.ref('expenses').push({
//   description: 'Medicines',
//   note: 'until 25.10',
//   amount: 100,
//   createdAt: 35345343232
// })

// database.ref('expenses').push({
//   description: 'Medicines',
//   note: 'until 25.10',
//   amount: 150,
//   createdAt: 35345343232
// })

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// }, e => console.log(e))

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// }, e => console.log(e))

// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// }, e => console.log(e))
