import type { UserCredential } from "firebase/auth";
import type { UserStoreInterface } from "../types/common.type";

/**
 * todo 세션으로 수정하는 편이 나을듯.
 * 세션으로 수정을 하고, 이후에 혹시 firebase가 자체적으로 제공하는 기능이 없는지 살펴볼것
 */
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
