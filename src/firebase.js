import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDw421MY7I7RbkVby3eMTcKNqXY5eVi7Pg",
  authDomain: "crud-udemy-react-d0a05.firebaseapp.com",
  projectId: "crud-udemy-react-d0a05",
  storageBucket: "crud-udemy-react-d0a05.appspot.com",
  messagingSenderId: "694412296471",
  appId: "1:694412296471:web:31c57a6950266f1e37b752",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}