import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.service";

//todo: ContextAPI 혹은 Redux로 user정보에 대한 관리?
//todo: cache를 어떻게 할지?
const authService = {
  async signUp(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
  },
  async logIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  },
  async signOut() {},
};
export default authService;
