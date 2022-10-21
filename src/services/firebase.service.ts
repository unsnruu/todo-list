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
import { COLLECTION_CATEGORY } from "../constant/common";
import type { UserId } from "../types/common.type";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const getUserId = () => {
  if (!auth.currentUser) throw new Error("유저 정보가 존재하지 않습니다.");
  return auth.currentUser.uid;
};
const getDocRefBy = <T>(collectionName: string, docId: string) => {
  return doc(db, collectionName, docId) as DocumentReference<T>;
};
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export { app, auth, db, createCollection, getUserId, getDocRefBy };
