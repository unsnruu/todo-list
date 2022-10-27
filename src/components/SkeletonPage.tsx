import styled from "@emotion/styled";
import Skeleton from "./Skeleton";

function SkeletonPage() {
  return (
    <SkeletonMain>
      <Skeleton />
      <SekeletonForm>
        <Skeleton />
      </SekeletonForm>
    </SkeletonMain>
  );
}
export default SkeletonPage;

const SkeletonMain = styled.div`
  width: 100%;
`;
const SekeletonForm = styled.div`
  width: 100%;
  height: 1rem;
  padding: 1rem;
`;
