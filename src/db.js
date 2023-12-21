import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/storage'; 
import 'firebase/database'; 
import 'firebase/firestore'; 

const firebaseConfig = {
 apiKey: "your-api-key",
 authDomain: "your-auth-domain",
 projectId: "your-project-id",
 storageBucket: "your-storage-bucket",
 messagingSenderId: "your-messaging-sender-id",
 appId: "your-app-id"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
