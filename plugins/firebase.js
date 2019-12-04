import firebase from 'firebase/app'
import 'firebase/auth'
if (!firebase.apps.length) {
    const config = {
      apiKey: "AIzaSyCwOkTFFKYXI6Yk6zQQHgk1z-p-8RICQME",
      authDomain: "paradox-7274.firebaseapp.com",
      databaseURL: "https://paradox-7274.firebaseio.com",
      projectId: "paradox-7274",
      storageBucket: "paradox-7274.appspot.com",
      messagingSenderId: "416556691679",
      appId: "1:416556691679:web:b196338e607a36b3ed796a",
      measurementId: "G-LEH2DNT742"
    };
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.auth()
export {fireDb}
