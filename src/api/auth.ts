import authService from "../services/auth";

const signUp = (email: string, password: string) => {
  authService.signUp(email, password);
};
const logIn = (email: string, password: string) => {
  authService.logIn(email, password);
};

export { signUp, logIn };
