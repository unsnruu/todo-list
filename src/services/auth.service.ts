import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.service";

//todo: ContextAPI 혹은 Redux로 user정보에 대한 관리?
//todo: cache를 어떻게 할지?
const authService = {
  async signUp(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  },
  async logIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  },
  async signOut() {},
};
export default authService;
