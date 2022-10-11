import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.service";
import userStoreImpl from "../store/user";
import type { UserStoreInterface } from "../types/common.type";

class AuthService {
  userStore: UserStoreInterface;
  constructor() {
    this.userStore = userStoreImpl;
  }
  async signUp(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    this.userStore.userCredential = userCredential;
  }
  async logIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    this.userStore.userCredential = userCredential;
  }
  isLoggedIn() {
    if (this.userStore.userCredential) {
      return true;
    } else {
      return false;
    }
  }
  async logOut() {
    await signOut(auth);
    this.userStore.userCredential = null;
  }
}

export default new AuthService();
