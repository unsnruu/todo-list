import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@services/firebase.service";
import authService from "@services/auth.service";
import { Auth } from "../types/common.type";

const signUp = async ({ email, password }: Auth) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
const logIn = async ({ email, password }: Auth) => {
  await signInWithEmailAndPassword(auth, email, password);
};
const isLoggedIn = async () => {
  return await authService.isLoggedIn();
};
const logOut = async () => {
  await signOut(auth);
};

export { signUp, logIn, isLoggedIn, logOut };
