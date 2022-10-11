import type { UserCredential } from "firebase/auth";

export interface Todo {
  text: string;
  isCompleted: boolean;
  category: string;
}
export interface Auth {
  email: string;
  password: string;
}

export interface UserStoreInterface {
  set userCredential(user: UserCredential | null);
  get userCredential();
}
