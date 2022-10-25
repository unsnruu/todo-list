export interface Auth {
  email: string;
  password: string;
}
export type Email = string;
export type Password = string;

export interface AuthService {
  signUp({
    email,
    password,
  }: {
    email: Email;
    password: Password;
  }): Promise<void>;
  logIn({
    email,
    password,
  }: {
    email: Email;
    password: Password;
  }): Promise<void>;
  logOut(): Promise<void>;
}
