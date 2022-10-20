import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MdDelete, MdModeEdit } from "react-icons/md";

interface TodoItemProps {
  text: string;
  isCompleted: boolean;
  handleDelete: () => void;
  handleToggleCompletion: () => void;
}

function TodoItem({
  text,
  isCompleted,
  handleDelete,
  handleToggleCompletion,
}: TodoItemProps) {
  return (
    <Container>
      <Completion onClick={handleToggleCompletion}>
        {isCompleted && <Circle />}
      </Completion>
      <Text>{text}</Text>
      <IconsContainer>
        <MdModeEdit />
        <MdDelete onClick={handleDelete} />
      </IconsContainer>
    </Container>
  );
}
export default TodoItem;

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  margin-bottom: 1rem;
  list-style: none;
`;
const Completion = styled.button`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.color.dark};
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;
const bounce = keyframes`
20%, 75%{
   transform: scale(250%);
   opacity: 0.4;
}
35% {
  opacity: 1;
  transform: scale(100%);
}
50%{
  transform: scale(70%);
}
100%{
  transform: scale(100%);
}
`;
const Circle = styled.div`
  width: 70%;
  height: 70%;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 50%;
  transition: all;
  animation: ${bounce} 1s ease-out;
`;
const Text = styled.span``;
const IconsContainer = styled.div`
  margin-left: auto;
  & svg {
    margin-left: 1rem;
    cursor: pointer;
  }
`;
