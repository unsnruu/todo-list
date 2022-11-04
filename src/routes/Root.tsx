import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.light};
`;

export default Root;
