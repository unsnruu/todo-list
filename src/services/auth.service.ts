import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { auth, getDocRefBy } from "./firebase.service";
import { COLLECTION_CATEGORY } from "../constant/common";

class AuthService {
  async signUp(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    const { uid } = user;
    //회원 가입과 동시에 유저의 카테고리 정보 초기화
    const docRef = getDocRefBy(COLLECTION_CATEGORY, uid);
    await setDoc(docRef, {
      categories: [],
    });
  }
  async logIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }
  async logOut() {
    await signOut(auth);
  }
}

export default new AuthService();
