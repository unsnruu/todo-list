import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

interface MainProps extends PropsWithChildren {}

function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
`;

export default Main;
