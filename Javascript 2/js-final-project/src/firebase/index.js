import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// alert('Add your firebase config!');
const firebaseConfig = {
    apiKey: "AIzaSyCAQOFiFn4DGaxX5oXzraj0wAu-GxHo8iM",
    authDomain: "fir-demo-b60dc.firebaseapp.com",
    projectId: "fir-demo-b60dc",
    storageBucket: "fir-demo-b60dc.appspot.com",
    messagingSenderId: "516702488046",
    appId: "1:516702488046:web:b0a95fe0fa025cb4bafaff"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};