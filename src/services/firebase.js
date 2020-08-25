import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArKLgVWkpNio6gJRCGOw2fy4rrewPEM5g",
    authDomain: "cs-club-competition-site.firebaseapp.com",
    databaseURL: "https://cs-club-competition-site.firebaseio.com",
    projectId: "cs-club-competition-site",
    storageBucket: "cs-club-competition-site.appspot.com",
    messagingSenderId: "258704633850",
    appId: "1:258704633850:web:0f4900002d6c24fbf83e43",
    measurementId: "G-5625DH6ES9"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithRedirect(provider);
};

export const signOut = () => {
    auth.signOut().then(function () {
        // Sign-out successful.
        console.log("signed out");
    }).catch(function (error) {
        // An error happened.
        console.log("signed out");
    });
}

export const addUser = (user, username, grade) => {
    db.collection("users").doc(user.uid).set({
        username: username,
        fullName: user.displayName,
        grade: grade,
        score: 0,
        solvedProblems: []
    });
};
