// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDi50Uv0IgHXdqV5jQsAgq0dNPpa1RIej4",
  authDomain: "chat-buddy-48e71.firebaseapp.com",
  projectId: "chat-buddy-48e71",
  storageBucket: "chat-buddy-48e71.appspot.com",
  messagingSenderId: "871703579162",
  appId: "1:871703579162:web:6e59c9e5830b4a6eca5fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app)

export const userRef = collection(db, 'users')
export const roomRef = collection(db, 'rooms')