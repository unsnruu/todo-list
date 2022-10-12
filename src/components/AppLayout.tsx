import type { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

function AppLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Sidebar />
        <Content>{children}</Content>
      </Main>
      <Footer />
    </Container>
  );
}

export default AppLayout;

const Container = styled.div``;
const Main = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
  width: 100%;
  min-height: 20rem;
  height: 100%;
  border-radius: 1rem;
  background-color: transparent;
  padding: 1rem;
`;
const Footer = styled.footer``;
