// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import { collection, addDoc } from "firebase/firestore"; 



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGrAjODUaV0xUR7tlOvbVmRyFSgNSXAM",
  authDomain: "fireapp-47786.firebaseapp.com",
  projectId: "fireapp-47786",
  storageBucket: "fireapp-47786.appspot.com",
  messagingSenderId: "429580976424",
  appId: "1:429580976424:web:38d569ae94610ccdd9101d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


//Function to add data to fireStore
export const setDoc = async (email, password) => {
  await addDoc(collection(db, "users"), {
    email: email,
    password: password
  })
  console.log("Tarea guardada correctamente:", email, password);
}