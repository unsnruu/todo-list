import { v4 as uuidv4 } from "uuid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { auth, getDocRefBy } from "./firebase.service";
import { COLLECTION_CATEGORY } from "../constant/common";
import { AuthService } from "src/types/auth.type";

class AuthServiceImpl implements AuthService {
  async signUp({ email, password }: { email: string; password: string }) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    const { uid } = user;
    //회원 가입과 동시에 유저의 카테고리 정보 초기화
    const docRef = getDocRefBy(COLLECTION_CATEGORY, uid);
    const categoryId = uuidv4();
    await setDoc(docRef, {
      [categoryId]: "할 일",
    });
  }
  async logIn({ email, password }: { email: string; password: string }) {
    await signInWithEmailAndPassword(auth, email, password);
  }
  async logOut() {
    await signOut(auth);
  }
}

export default new AuthServiceImpl();
