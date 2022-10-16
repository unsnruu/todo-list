import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { auth, getCollectionRef } from "./firebase.service";

class AuthService {
  async signUp(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
    //회원 가입과 동시에 유저의 카테고리 정보 초기화
    const collectionRef = getCollectionRef();
    await setDoc(collectionRef, {
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
