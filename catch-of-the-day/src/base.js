// Allows us to mirror our state from Firebase
import Rebase from 're-base'

// for anything that's not just mirroring to state
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAn6TmJyJoag7sP4Cas4Vkx6n5srIlmSk",
  authDomain: "catch-of-the-day-ar-e5d8a.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ar-e5d8a.firebaseio.com"
  // projectId: "catch-of-the-day-ar-e5d8a",
  // storageBucket: "catch-of-the-day-ar-e5d8a.appspot.com",
  // messagingSenderId: "983180506536"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// This is a default export
export default base
