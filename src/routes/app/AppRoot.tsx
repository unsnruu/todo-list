import { useEffect } from "react";
import { Outlet, useNavigate, redirect } from "react-router-dom";
import styled from "@emotion/styled";

import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

import authService from "@services/auth.service";
import useTodoList from "@hooks/useTodoList";

function AppRoot() {
  const { user } = useTodoList();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, user]);

  const handleClickLogout = () => {
    authService.logOut();
    redirect("/");
  };

  return (
    <Container>
      <Header>
        <LogOutButton onClick={handleClickLogout}>로그아웃</LogOutButton>
      </Header>
      <Main>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Main>
      <Footer />
    </Container>
  );
}

export default AppRoot;

const Container = styled.div`
  height: 100%;
  overflow: hidden;
`;
const Main = styled.div`
  display: flex;
  height: 80%;
`;
const LogOutButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
  cursor: pointer;
`;
const Content = styled.div`
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
`;
const Footer = styled.footer`
  height: 10%;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 1rem 1rem 0 0;
`;
