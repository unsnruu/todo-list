import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.service";

class AuthService {
  async signUp(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
  }
  async logIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }
  async logOut() {
    await signOut(auth);
  }
}

export default new AuthService();
