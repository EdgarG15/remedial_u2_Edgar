import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

/*const firebaseConfig = {
  apiKey: 'AIzaSyD4KaJ-MArSxzaByKuzyaM7QU1rBTRwt78',
  authDomain: 'actividad-10-utch.firebaseapp.com',
  databaseURL: 'https://actividad-10-utch-default-rtdb.firebaseio.com',
  projectId: 'actividad-10-utch',
  storageBucket: 'actividad-10-utch.appspot.com',
  messagingSenderId: '912457574451',
  appId: '1:912457574451:web:27ad1971316a81d0595b46',
};*/

const firebaseConfig = {
  apiKey: "AIzaSyCgjn_bHdK-INMSXsOb5jZQU9ltEpeN06o",
  authDomain: "actividad-10-edgar.firebaseapp.com",
  projectId: "actividad-10-edgar",
  storageBucket: "actividad-10-edgar.appspot.com",
  messagingSenderId: "307853082714",
  appId: "1:307853082714:web:020e139f481dfe7bbfd863"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
