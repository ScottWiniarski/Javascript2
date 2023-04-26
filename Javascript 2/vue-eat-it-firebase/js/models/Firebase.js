
// Your web app's Firebase configuration
//alert('add your firebase config in models/Firebase.js');
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAQOFiFn4DGaxX5oXzraj0wAu-GxHo8iM",
    authDomain: "fir-demo-b60dc.firebaseapp.com",
    projectId: "fir-demo-b60dc",
    storageBucket: "fir-demo-b60dc.appspot.com",
    messagingSenderId: "516702488046",
    appId: "1:516702488046:web:b0a95fe0fa025cb4bafaff"
};

firebase.initializeApp(firebaseConfig);

// Create references to firestore and storage
const db = firebase.firestore();
const storage = firebase.storage().ref();
