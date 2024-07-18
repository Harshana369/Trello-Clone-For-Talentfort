import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "trello-clone-55b85.firebaseapp.com",
  projectId: "trello-clone-55b85",
  storageBucket: "trello-clone-55b85.appspot.com",
  messagingSenderId: "1047639782789",
  appId: "1:1047639782789:web:9faaac87ab10979e6b80ec",
};

export const app = initializeApp(firebaseConfig);
