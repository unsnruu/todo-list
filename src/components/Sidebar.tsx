import styled from "@emotion/styled";

function Sidebar() {
  return (
    <Container>
      <h1>sidebar</h1>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  height: 100%;
  width: 16rem;
  border-radius: 1rem;
`;
