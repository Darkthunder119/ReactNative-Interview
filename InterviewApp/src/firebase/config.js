import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env["EXPO_API_KEY"],
  authDomain: process.env["EXPO_AUTH_DOMAIN"],
  databaseURL: process.env["EXPO_DATABASE_URL"],
  projectId: process.env["EXPO_PROJECT_ID"],
  storageBucket: process.env["EXPO_STORAGE_BUCKET"],
  messagingSenderId: process.env["EXPO_MESSAGING_SENDER_ID"],
  appId: process.env["EXPO_APP_ID"],
  measurementId: process.env["EXPO_MEASUREMENT_ID"],
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
