import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.service";
import userStore from "../store/user";

const authService = {
  async signUp(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    userStore.userCredential = userCredential;
  },
  async logIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    userStore.userCredential = userCredential;
  },
  isLoggedIn() {
    if (userStore.userCredential) {
      return true;
    } else {
      return false;
    }
  },
  async logOut() {
    await signOut(auth);
    userStore.userCredential = null;
  },
};
export default authService;
