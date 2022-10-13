import { getTodosByCategory } from "@api/todo";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const { category } = params;
  if (!category) return [];

  const todos = await getTodosByCategory(category);
  return todos;
}

function TodoList() {
  const todos = useLoaderData();
  console.log(todos);
  return (
    <div>
      <h1>Todolist</h1>
    </div>
  );
}

export default TodoList;
