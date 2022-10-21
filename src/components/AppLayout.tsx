import type { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { logOut } from "@api/auth";

import { redirect } from "react-router-dom";

function AppLayout({ children }: PropsWithChildren) {
  const handleClickLogout = () => {
    logOut();
    redirect("/");
  };
  return (
    <Container>
      <Header>
        <LogOutButton onClick={handleClickLogout}>로그아웃</LogOutButton>
      </Header>
      <Main>
        <Sidebar />
        <Content>{children}</Content>
      </Main>
      <Footer />
    </Container>
  );
}
export default AppLayout;

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
