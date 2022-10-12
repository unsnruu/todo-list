import type { PropsWithChildren } from "react";
import styled from "@emotion/styled";

function Header({ children }: PropsWithChildren) {
  return (
    <Container>
      <span>logo</span>
      {children}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;
`;
