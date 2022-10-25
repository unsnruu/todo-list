import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "@components/CommonPage";
import type { FormEvent, ChangeEvent } from "react";
import todoService from "@services/todo.service";
import useTodoList from "@hooks/useTodoList";

function TodoEdit() {
  const { todos, setTodos, user } = useTodoList();
  const [newText, setNewText] = useState("");
  const { id, category } = useParams();
  const navigate = useNavigate();

  const curTodo = todos.filter((todo) => todo.id === id).pop();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) throw new Error("id가 존재하지 않습니다.");
    if (!curTodo) throw new Error("todo가 존재하지 않습니다.");
    await todoService.editTodo({
      todoId: id,
      todo: { ...curTodo, text: newText },
    });
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    navigate(`/app/todo/${category}`);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewText(e.currentTarget.value);
  };
  return (
    <Page>
      <Page.Form handleSubmit={handleSubmit}>
        <Page.TextInput handleChange={handleChange} />
        <Page.SubmitButton text="변경하기" />
      </Page.Form>
    </Page>
  );
}

export default TodoEdit;
