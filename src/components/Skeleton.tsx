import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

function Skeleton() {
  return <Container />;
}
export default Skeleton;

const movement = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  animation: ${movement} 1s ease;
`;
