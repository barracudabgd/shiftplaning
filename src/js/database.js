import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmrOE4oPHlbQMujca1inH2jd-2M47PZpo",
    authDomain: "shiftplaning.firebaseapp.com",
    databaseURL: "https://shiftplaning.firebaseio.com",
    projectId: "shiftplaning",
    storageBucket: "shiftplaning.appspot.com",
    messagingSenderId: "549604165221"
}

firebase.initializeApp(config);

const database = firebase.database()

export default database