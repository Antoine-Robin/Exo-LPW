import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCYMpJhTwMct0Ou6l3zrggBZzl2glneFcU",
  authDomain: "test-auth-c3588.firebaseapp.com",
  projectId: "test-auth-c3588",
  storageBucket: "test-auth-c3588.appspot.com",
  messagingSenderId: "143539714656",
  appId: "1:143539714656:web:391daf8701a7c3d3d42105",
});

export const auth = app.auth();
export default app;
