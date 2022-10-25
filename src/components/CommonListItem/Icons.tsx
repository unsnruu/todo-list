import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

interface IconsProps extends PropsWithChildren {}

function Icons({ children }: IconsProps) {
  return <Container>{children}</Container>;
}
export default Icons;

const Container = styled.div`
  margin-left: auto;
  & svg {
    margin-left: 1rem;
    cursor: pointer;
  }
`;
