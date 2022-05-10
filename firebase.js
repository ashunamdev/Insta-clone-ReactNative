
import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAn0ZtscB2HNME7x8lXAxIGx710Z1xofNA",
  authDomain: "instagram-clone-rn-428e6.firebaseapp.com",
  projectId: "instagram-clone-rn-428e6",
  storageBucket: "instagram-clone-rn-428e6.appspot.com",
  messagingSenderId: "27521973725",
  appId: "1:27521973725:web:402be469bd16f8347a4a34"
};

!firebase.apps.length ? 
firebase.initializeApp(firebaseConfig):
firebase.app()

const db = firebase.firestore()
export { firebase, db };