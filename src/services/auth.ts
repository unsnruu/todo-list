import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";

export const authService = {
  async signUp(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (err) {
      console.error(err);
    }
  },
};
