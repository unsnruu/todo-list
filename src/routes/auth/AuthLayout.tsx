import Header from "@components/Header";
import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Container>
      <Header>
        <Link to="/">home</Link>
      </Header>
      <Outlet />
    </Container>
  );
}

export default AuthLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
