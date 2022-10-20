export interface Todo {
  text: string;
  isCompleted: boolean;
  category: string;
  id: string;
}
export type Todos = Todo[];

export type TodoForm = Omit<Todo, "id">;

export interface Auth {
  email: string;
  password: string;
}

export type Category = string;
export type Categories = Category[];
