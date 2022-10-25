import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

interface MainProps extends PropsWithChildren {}

function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}

export default Main;

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  margin-bottom: 1rem;
  list-style: none;
`;
