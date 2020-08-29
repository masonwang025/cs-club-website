import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyArKLgVWkpNio6gJRCGOw2fy4rrewPEM5g",
  authDomain: "cs-club-competition-site.firebaseapp.com",
  databaseURL: "https://cs-club-competition-site.firebaseio.com",
  projectId: "cs-club-competition-site",
  storageBucket: "cs-club-competition-site.appspot.com",
  messagingSenderId: "258704633850",
  appId: "1:258704633850:web:0f4900002d6c24fbf83e43",
  measurementId: "G-5625DH6ES9",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const getBot = () => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", "https://tranquil-atoll-39338.herokuapp.com/", true );
  xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*")
  xmlHttp.send(null);
}

export const signInWithGoogle = () => {
  getBot();
  auth.signInWithRedirect(provider);
};

export const signOut = () => {
  auth
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};

export const addUser = (user, username, grade, emailList) => {
  getBot();
  db.collection("users").doc(user.uid).set({
    username: username,
    fullName: user.displayName,
    grade: grade,
    emailList: emailList,
    createdTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  db.collection("submissions").doc(user.uid).set({});
};

export const submitFlag = (user, problem, flag) => {
  getBot();
  let updateMap = {};
  let uuid = uuidv4();
  updateMap[uuid] = {
    problem: problem,
    flag: flag,
  };
  db.collection("submissions").doc(user.uid).update(updateMap);
  return uuid;
};
