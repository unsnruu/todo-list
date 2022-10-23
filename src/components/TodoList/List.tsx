import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

interface ListProps extends PropsWithChildren {}

function List({ children }: ListProps) {
  return <StyledList>{children}</StyledList>;
}
export default List;

const StyledList = styled.ul`
  height: 100%;
  overflow: scroll;
`;
