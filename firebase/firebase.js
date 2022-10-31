import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import {config} from "./config";

export function initialize() {
  const firebaseApp = initializeApp(config.firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const fireStore = getFirestore();

  return { firebaseApp, firebaseAuth, fireStore };
}
