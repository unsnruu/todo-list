import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Main>
        <Sidebar />
        <Content>{children}</Content>
      </Main>
    </Container>
  );
}
export default Layout;

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.light};
`;
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
  background-color: white;
  padding: 1rem;
`;
