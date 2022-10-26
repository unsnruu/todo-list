import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface SkeletonProps {
  width: number;
  wUnit: string;
  height: number;
  hUnit: string;
}

function Skeleton({
  width,
  height,
  hUnit = "px",
  wUnit = "px",
}: SkeletonProps) {
  return (
    <Container
      width={width}
      wUnit={wUnit}
      height={height}
      hUnit={hUnit}
    ></Container>
  );
}
export default Skeleton;

const movement = keyframes`

`;

const Container = styled.div<SkeletonProps>`
  width: ${({ width, wUnit }) => `${width}${wUnit}`};
  height: ${({ height, hUnit }) => `${height}${hUnit}`};
`;
