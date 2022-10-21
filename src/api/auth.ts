import authService from "@services/auth.service";
import type { Auth } from "../types/auth.type";

const signUp = async ({ email, password }: Auth) => {
  await authService.signUp(email, password);
};
const logIn = async ({ email, password }: Auth) => {
  await authService.logIn(email, password);
};
const logOut = async () => {
  await authService.logOut();
};

export { signUp, logIn, logOut };
