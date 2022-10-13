export interface Todo {
  text: string;
  isCompleted: boolean;
  createdAt: Date;
}
export type Todos = Todo[];
export interface Auth {
  email: string;
  password: string;
}
