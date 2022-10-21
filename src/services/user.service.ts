import { NextOrObserver, onAuthStateChanged } from "firebase/auth";
import { auth } from "@services/firebase.service";
import type { User, UserService } from "../types/user.type";

class UserServiceImpl implements UserService {
  getUser(func: NextOrObserver<User>): void {
    onAuthStateChanged(auth, func);
  }
}

export default new UserServiceImpl();
