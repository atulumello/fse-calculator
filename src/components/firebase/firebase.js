import firebase from 'firebase'

const config = {
  apiKey: `${process.env.FIREBASE_APIKEY}`,
  authDomain: `${process.env.FIREBASE_AUTHDOMAIN}`,
  databaseURL: `${process.env.FIREBASE_DATABASEURL}`,
  projectId: `${process.env.FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.FIREBASE_SENDERID}`,
  appId: `${process.env.FIREBASE_APPID}`,
  measurementId: `${process.env.FIREBASE_MEASUREMENTID}`
}


firebase.initializeApp(config)

export default firebase