import styled from "@emotion/styled";
import useCategory from "@hooks/useCategory";
import StyledLink from "@components/StyledLink";

function Sidebar() {
  const { categories } = useCategory();

  return (
    <Container>
      <h1>sidebar</h1>
      <ul>
        {categories.map((category, idx) => (
          <StyledLink key={idx} to={`todo/${category}`}>
            {category}
          </StyledLink>
        ))}
      </ul>
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
