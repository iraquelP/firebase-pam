import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDVIt8Et124XEM0X8xwtDAAdolHveM2CEg",
    authDomain: "aula01-fc832.firebaseapp.com",
    databaseURL: "https://aula01-fc832-default-rtdb.firebaseio.com",
    projectId: "aula01-fc832",
    storageBucket: "aula01-fc832.appspot.com",
    messagingSenderId: "653018660789",
    appId: "1:653018660789:web:1b1388d28c438d8c8463fc",
    measurementId: "G-27LV5366CJ"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;