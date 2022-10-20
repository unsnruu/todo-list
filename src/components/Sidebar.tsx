import styled from "@emotion/styled";
import useCategory from "@hooks/useCategory";
import StyledLink from "@components/StyledLink";

function Sidebar() {
  const { categories } = useCategory();

  if (!categories) return <div>카테고리가 존재하지 않습니다</div>;
  return (
    <Container>
      <Title>카테고리</Title>
      <LinkList>
        {categories.map((category, idx) => (
          <li key={idx}>
            <StyledLink to={`todo/${category}`}>{category}</StyledLink>
          </li>
        ))}
      </LinkList>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 16rem;
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  margin-bottom: 1rem;
`;
const LinkList = styled.ul`
  width: 100%;
  & li {
    list-style: none;
    margin: 1rem;
    padding-left: 0;
    margin-left: 0;
  }
`;
