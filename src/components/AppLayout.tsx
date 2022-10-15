import type { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { logOut } from "@api/auth";
import CategoryProvider from "../context/categoryContext";

function AppLayout({ children }: PropsWithChildren) {
  const handleClickLogout = () => {
    logOut();
  };

  return (
    <CategoryProvider>
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
    </CategoryProvider>
  );
}
export default AppLayout;

const Container = styled.div``;
const Main = styled.div`
  display: flex;
`;
const LogOutButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
`;
const Content = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: transparent;
  padding: 1rem;
`;
const Footer = styled.footer``;
