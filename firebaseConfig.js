// Import the functions you need from the SDKs you need
import { initializeApp, getReactNativePersistence } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


import * as FileSystem from 'expo-file-system';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob,
} from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
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
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


//Function to add data to fireStore
export const setDoc = async (email, password) => {
  try {
    await addDoc(collection(db, "users"), {
      email: email,
      password: password
    });
    Alert.alert("usuario registrado");
    console.log("Tarea guardada correctamente:", email, password);
  } catch (error) {
    console.log(error);
  }


};


export const setDocName = async (name, nick, photo) => {

  const storage = getStorage(app);
  try {

    const { uri } = await FileSystem.getInfoAsync(photo);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onerror = (e) => {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    const filename = photo.substring(
      photo.lastIndexOf("/") + 1
    );
    const storageRef = ref(storage, "foto-user/" + `${filename}`);
    await uploadBytes(storageRef, blob).then((snapshot) => { });
    const url = await getDownloadURL(storageRef);




    await addDoc(collection(db, "names"), {
      name: name,
      nick: nick,
      photo: url,
      status: "Activo"
    });
    Alert.alert("usuario registrado");
    console.log("Nombre guardado correctamente:", name, nick, url);
  } catch (error) {
    console.log(error);
  }


};