import React, { useState } from "react";
import styled from "@emotion/styled";

import TodoItem from "@components/TodoItem";
import useTodoList from "@hooks/useTodoList";
import type { Todos, Todo } from "../../types/todo.type";
import todoService from "@services/todo.service";

function TodoList() {
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
    <Container>
      <StyledForm method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="✨새로운 할 일을 여기 입력해주세요"
          value={newText}
          onChange={handleChange}
        />
        <button>추가</button>
      </StyledForm>
      <TodoItemContainer>
        {todos.map(({ id, isCompleted, text }) => (
          <TodoItem
            key={id}
            text={text}
            isCompleted={isCompleted}
            handleDelete={createDeleteHandler(id)}
            handleToggleCompletion={createToggleHandler(id)}
          />
        ))}
      </TodoItemContainer>
    </Container>
  );
}
export default TodoList;

function getToggledTodosById(todos: Todos, id: string) {
  return todos.map((todo) => {
    if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
    return todo;
  });
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
`;

const StyledForm = styled.form`
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  & input {
    border: none;
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
    flex: 5;
    outline: none;
  }
  & input :focus {
    background-color: transparent;
  }
  & button {
    border: none;
    background-color: ${({ theme }) => theme.color.secondary};
    border-radius: 0.5rem;
    padding: 1rem;
    flex: 1;
    cursor: pointer;
    font-size: 1rem;
    color: white;
  }
`;
const TodoItemContainer = styled.ul`
  height: 100%;
  overflow: scroll;
`;
