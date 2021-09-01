import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjHBJlMspHnPUPSJvcvL6VwUwPZnJZj3M",
    authDomain: "instagram-clone-4f9e3.firebaseapp.com",
    projectId: "instagram-clone-4f9e3",
    storageBucket: "instagram-clone-4f9e3.appspot.com",
    messagingSenderId: "673338778391",
    appId: "1:673338778391:web:5efdf4a0917ceb93bfcd52",
    measurementId: "G-SQKXML9Y38"
});

const db = firebaseApp.firestone(); //Connect to Database
const auth = firebase.auth(); //Login and Sign up 
const storage = firebase.storage(); //Upload images and comments

export{ db, auth, storage };

//export default db