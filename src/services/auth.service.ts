import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.service";

//todo: ContextAPI 혹은 Redux로 user정보에 대한 관리?
//todo: cache를 어떻게 할지?
const authService = {
  async isLoggedIn() {
    onAuthStateChanged(auth, (user) => {
      if (user) return true;
      else return false;
    });
  },
};
export default authService;
