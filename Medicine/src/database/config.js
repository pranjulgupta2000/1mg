import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyDYG9H1dQpsYpYL_x6z3JZ_tge0h_Z11Lw",

    authDomain: "medicineapp-cbd28.firebaseapp.com",

    databaseURL: "https://medicineapp-cbd28-default-rtdb.firebaseio.com",

    projectId: "medicineapp-cbd28",

    storageBucket: "medicineapp-cbd28.appspot.com",

    messagingSenderId: "193912332563",

    appId: "1:193912332563:web:2b3a64b41859c057d5fae6",

    measurementId: "G-Z2Y3VLGR1K"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database()

export { database }



