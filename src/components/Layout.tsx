import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import Header from "./Header";
import Main from "./Main";

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}
export default Layout;

const Container = styled.div``;
