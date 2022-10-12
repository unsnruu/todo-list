import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Sidebar />
      {children}
    </Container>
  );
}
export default Layout;

const Container = styled.div``;
