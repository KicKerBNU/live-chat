import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA482qj1G1n0FWvS55NwUBEnJOmgFv3-vs",
    authDomain: "live-chat-10ddc.firebaseapp.com",
    projectId: "live-chat-10ddc",
    storageBucket: "live-chat-10ddc.appspot.com",
    messagingSenderId: "866384876791",
    appId: "1:866384876791:web:06225cd32208f171c6aff2",
    measurementId: "G-7B2XT0LHW7"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }