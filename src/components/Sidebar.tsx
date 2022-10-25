import styled from "@emotion/styled";
import { MdMiscellaneousServices } from "react-icons/md";

import StyledLink from "@components/StyledLink";
import useTodosState from "@hooks/useTodoList";
import type { Category, CategoryId } from "../types/category.type";

function Sidebar() {
  const { state, categories, setSelectedCategory } = useTodosState();

  const createCategoryHandler = (category: Category) => () => {
    setSelectedCategory(category);
  };

  //? 분기점을 이렇게 설정하는 게 맞을까?
  if (state === "loading") return <div>로딩중</div>;
  if (!categories) {
    return <div>카테고리가 존재하지 않습니다</div>;
  }
  return (
    <Container>
      <Title>카테고리</Title>
      <LinkList>
        {categories.map((category) => (
          <li key={category.id} onClick={createCategoryHandler(category)}>
            <StyledLink to={`todo/${category.title}`}>
              {category.title}
            </StyledLink>
          </li>
        ))}
      </LinkList>
      <StyledLink to="category">
        <MdMiscellaneousServices />
      </StyledLink>
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
