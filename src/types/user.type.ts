import type { User as FirebaseUser, NextOrObserver } from "firebase/auth";

export type User = FirebaseUser | null;
export interface UserService {
  getUser(func: NextOrObserver<User>): void;
}
