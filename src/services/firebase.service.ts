import { firebaseConfig } from "../config/firebase.config";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  DocumentData,
  DocumentReference,
  CollectionReference,
  collection,
  doc,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const createDocRefBy = <T>(collectionName: string, docId: string) => {
  return doc(db, collectionName, docId) as DocumentReference<T>;
};
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export { app, auth, db, createCollection, createDocRefBy };
