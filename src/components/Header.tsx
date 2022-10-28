import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import type { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return (
    <Container>
      <Link to="/">
        <img src="favicon_io/favicon-32x32.png" alt="logo" />
      </Link>
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
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;
`;
