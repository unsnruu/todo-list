import { getTodosByCategory } from "@api/todo";
import { Todo } from "../../types/common.type";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const { category } = params;
  if (!category) throw new Error("해당 카테고리는 존재하지 않습니다.");

  const todos = await getTodosByCategory(category);
  return todos;
}

function TodoList() {
  const todos = useLoaderData() as Todo[];

  if (!todos) return <div></div>;
  return (
    <div>
      {todos.map(({ category, id, isCompleted, text }) => (
        <li key={id}>{text}</li>
      ))}
    </div>
  );
}

export default TodoList;
