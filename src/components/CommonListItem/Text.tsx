import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {
  text?: string;
}
function Text({ text, children }: TextProps) {
  return (
    <Container>
      <span>{text}</span>
      {children}
    </Container>
  );
}

const Container = styled.div``;

export default Text;
