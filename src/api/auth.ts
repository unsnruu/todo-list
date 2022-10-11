import authService from "@services/auth.service";
import { Auth } from "../types/common.type";

const signUp = async ({ email, password }: Auth) => {
  await authService.signUp(email, password);
};
const logIn = async ({ email, password }: Auth) => {
  await authService.logIn(email, password);
};
const isLoggedIn = () => {
  return authService.isLoggedIn();
};
const logOut = async () => {
  await authService.logOut();
};

export { signUp, logIn, isLoggedIn, logOut };
