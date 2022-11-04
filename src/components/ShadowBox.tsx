import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

interface ShadowBoxProps extends PropsWithChildren {}
function ShadowBox({ children }: ShadowBoxProps) {
  return <Container>{children}</Container>;
}

export default ShadowBox;

const Container = styled.div`
  box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;
