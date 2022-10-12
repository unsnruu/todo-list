import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <Main>
        <Sidebar />
        <Content>
          <h1>콘텐츠</h1>
          {children}
        </Content>
      </Main>
    </div>
  );
}
export default Layout;
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
