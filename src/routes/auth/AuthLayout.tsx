import Header from "@components/Header";
import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Container>
      <Header></Header>
      <Outlet />
    </Container>
  );
}

export default AuthLayout;

const Container = styled.div`
  & > header {
    margin-bottom: 1rem;
  }
`;
