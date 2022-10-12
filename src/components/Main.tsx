import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

function Main({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
export default Main;

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;
