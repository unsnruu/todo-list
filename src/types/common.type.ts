export interface Todo {
  text: string;
  isCompleted: boolean;
  category: string;
}
export type Todos = Todo[];
export interface Auth {
  email: string;
  password: string;
}
