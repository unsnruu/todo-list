import authService from "../services/auth.service";
import { Auth } from "../types/common.type";

const signUp = ({ email, password }: Auth) => {
  authService.signUp(email, password);
};
const logIn = ({ email, password }: Auth) => {
  authService.logIn(email, password);
};

export { signUp, logIn };
