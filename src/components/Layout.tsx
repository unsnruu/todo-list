import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import Header from "./Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
export default Layout;

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.light};
`;
