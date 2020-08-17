import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAsNwU0TQq72Sa3sSodK6IjJCMLPM-Nk_U",
    authDomain: "greater-toronto-financial.firebaseapp.com",
    databaseURL: "https://greater-toronto-financial.firebaseio.com",
    projectId: "greater-toronto-financial",
    storageBucket: "greater-toronto-financial.appspot.com",
    messagingSenderId: "707281007438",
    appId: "1:707281007438:web:9ec4b191f2f753aeef241f",
    measurementId: "G-R03NQP6SS8"
  }


firebase.initializeApp(config)

export default firebase