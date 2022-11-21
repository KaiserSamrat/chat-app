
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKbr26EITQSM-5zXKTk4NNGJT1Xo4aF0M",
  authDomain: "chat-chat-398c5.firebaseapp.com",
  projectId: "chat-chat-398c5",
  storageBucket: "chat-chat-398c5.appspot.com",
  messagingSenderId: "756819152367",
  appId: "1:756819152367:web:b5cb7b5c7d6785e0a8fa1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()