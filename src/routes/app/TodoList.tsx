import React, { useState } from "react";

import Page from "@components/CommonPage";
import TodoItem from "@components/TodoItem";
import useTodoList from "@hooks/useTodoList";
import todoService from "@services/todo.service";
import type { Todos } from "../../types/todo.type";
import { createTodo } from "../../utils/createTodo";

function TodoListRoute() {
  const { todos, setTodos, state, selectedCategory } = useTodoList();
  const [newText, setNewText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.currentTarget.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedCategory) return;

    const id = await todoService.addTodo({
      newTodoText: newText,
      categoryId: selectedCategory.id,
    });
    if (!id) throw new Error("새로운 투두를 생성하는데 문제가 발생했습니다.");

    const newTodo = createTodo({
      id,
      categoryId: selectedCategory.id,
      isCompleted: false,
      text: newText,
    });
    setTodos((todos) => [...todos, newTodo]);
    setNewText("");
  };

  const createDeleteHandler = (id: string) => async () => {
    if (!window.confirm("정말로 지우시겠습니까?")) return;
    await todoService.deleteTodo({ todoId: id });
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const createToggleHandler = (id: string) => async () => {
    const todo = todos.filter((todo) => todo.id === id).pop();
    if (!todo) {
      throw new Error("해당 아이디에 해당하는 투두 객체가 존재하지 않습니다.");
    }
    await todoService.editTodo({
      todoId: id,
      todo: { ...todo, isCompleted: !todo.isCompleted },
    });
    setTodos((todos) => getToggledTodosById(todos, id));
  };

  if (state === "loading") return <div>loading</div>;

  return (
    <Page>
      <Page.Title text={selectedCategory?.title || ""} />
      <Page.Form handleSubmit={handleSubmit}>
        <Page.TextInput
          handleChange={handleChange}
          placeholder="✨새로운 할 일을 여기 입력해주세요"
        />
        <Page.SubmitButton text="제출" />
      </Page.Form>
      <Page.List>
        {todos.map(({ id, text, isCompleted }) => (
          <TodoItem
            key={id}
            id={id}
            text={text}
            isCompleted={isCompleted}
            handleClickDelete={createDeleteHandler(id)}
            handleClickToggle={createToggleHandler(id)}
          />
        ))}
      </Page.List>
    </Page>
  );
}
export default TodoListRoute;

function getToggledTodosById(todos: Todos, id: string) {
  return todos.map((todo) => {
    if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
    return todo;
  });
}
