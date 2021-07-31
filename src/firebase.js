import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyBJGjEbrdnHdGIzAltbJR5cJtUD-bSVpUo",
  authDomain: "blog-7624f.firebaseapp.com",
  projectId: "blog-7624f",
  storageBucket: "blog-7624f.appspot.com",
  messagingSenderId: "768041052152",
  appId: "1:768041052152:web:215c11c6507fcbf311180d",
  measurementId: "G-HM46GS5NSD"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();