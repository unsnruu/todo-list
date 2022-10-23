import React, { useState } from "react";
import styled from "@emotion/styled";

import TodoList from "@components/TodoList/";
import TodoItem from "@components/TodoItem";
import useTodoList from "@hooks/useTodoList";
import type { Todos, Todo } from "../../types/todo.type";
import todoService from "@services/todo.service";

function TodoListRoute() {
  const { todos, setTodos, state, user, selectedCategory } = useTodoList();
  const [newText, setNewText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.currentTarget.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedCategory) return;
    const id = await todoService.addTodo(newText, selectedCategory, user);
    if (!id) throw new Error("새로운 투두를 생성하는데 문제가 발생했습니다.");
    const newTodo: Todo = {
      category: selectedCategory,
      id,
      isCompleted: false,
      text: newText,
    };
    setTodos((todos) => [...todos, newTodo]);
    setNewText("");
  };

  const createDeleteHandler = (id: string) => async () => {
    if (!window.confirm("정말로 지우시겠습니까?")) return;
    await todoService.deleteTodo(id, user);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const createToggleHandler = (id: string) => async () => {
    const todo = todos.filter((todo) => todo.id === id).pop();
    if (!todo) {
      throw new Error("해당 아이디에 해당하는 투두 객체가 존재하지 않습니다.");
    }
    await todoService.editTodo(
      id,
      { ...todo, isCompleted: !todo.isCompleted },
      user
    );
    setTodos((todos) => getToggledTodosById(todos, id));
  };

  if (state === "loading") return <div>loading</div>;

  return (
    <TodoList>
      <TodoList.Form handleSubmit={handleSubmit}>
        <TodoList.TextInput placeholder="✨새로운 할 일을 여기 입력해주세요" />
        <TodoList.SubmitButton text="제출" />
      </TodoList.Form>
      <TodoList.List>
        {todos.map(({ id, text, isCompleted }) => (
          <TodoItem
            key={id}
            text={text}
            isCompleted={isCompleted}
            handleDelete={createDeleteHandler(id)}
            handleToggleCompletion={createToggleHandler(id)}
          />
        ))}
      </TodoList.List>
    </TodoList>
  );
}
export default TodoListRoute;

function getToggledTodosById(todos: Todos, id: string) {
  return todos.map((todo) => {
    if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
    return todo;
  });
}
