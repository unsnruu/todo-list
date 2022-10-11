import type { UserCredential } from "firebase/auth";
import type { UserStoreInterface } from "../types/common.type";

class UserStore implements UserStoreInterface {
  private _userCredential: UserCredential | null;
  constructor() {
    this._userCredential = null;
  }
  get userCredential() {
    return this._userCredential;
  }
  set userCredential(user: UserCredential | null) {
    this._userCredential = user;
  }
}

export default new UserStore();
