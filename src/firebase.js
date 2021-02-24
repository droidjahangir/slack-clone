import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmDym4Qs6_EE7axzhsbTFFZUl6-L_j51Y",
  authDomain: "slack-clone-c73a0.firebaseapp.com",
  projectId: "slack-clone-c73a0",
  storageBucket: "slack-clone-c73a0.appspot.com",
  messagingSenderId: "116156056653",
  appId: "1:116156056653:web:25a1e36d93cc5f23424804",
  measurementId: "G-EKGBNWHM3W"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db