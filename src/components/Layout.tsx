import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

function Layout({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
export default Layout;

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.light};
`;
