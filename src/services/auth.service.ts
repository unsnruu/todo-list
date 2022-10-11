import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.service";

const authService = {
  async isLoggedIn() {
    onAuthStateChanged(auth, (user) => {
      if (user) return true;
      else return false;
    });
  },
};
export default authService;
