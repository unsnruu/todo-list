import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

interface CompletionProps {
  isCompleted: boolean;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Completion({ isCompleted, handleClick }: CompletionProps) {
  return (
    <Container onClick={handleClick}>{isCompleted && <Circle />}</Container>
  );
}

export default Completion;

const Container = styled.button`
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
