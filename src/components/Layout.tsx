import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <h1>Layout</h1>
      {children}
    </Container>
  );
}
export default Layout;

const Container = styled.div``;
