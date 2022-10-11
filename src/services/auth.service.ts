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
  isLoggedIn() {
    if (auth.currentUser) return true;
    else return false;
  }
  async logOut() {
    await signOut(auth);
  }
}

export default new AuthService();
