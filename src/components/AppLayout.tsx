import type { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import Header from "./Header";

function AppLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header></Header>
      {children}
      <Footer />
    </Container>
  );
}

export default AppLayout;

const Container = styled.div``;
const Footer = styled.footer``;
