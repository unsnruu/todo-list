import styled from "@emotion/styled";
import Sidebar from "../../components/Sidebar";

function AppHome() {
  return (
    <Main>
      <Sidebar />
      <Content></Content>
    </Main>
  );
}

export default AppHome;

const Main = styled.div`
  display: flex;
`;
const Content = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
  width: 100%;
  min-height: 20rem;
  height: 100%;
  border-radius: 1rem;
  background-color: transparent;
  padding: 1rem;
`;
