import styled from "@emotion/styled";
import { MdMiscellaneousServices } from "react-icons/md";

import StyledLink from "@components/StyledLink";
import useTodosState from "@hooks/useTodoList";
import type { Category } from "../types/category.type";
import Skeleton from "./Skeleton";

function Sidebar() {
  const { state, categories, setSelectedCategory } = useTodosState();

  const createCategoryHandler = (category: Category) => () => {
    setSelectedCategory(category);
  };

  if (state === "loading") {
    return (
      <SkeletonContainer>
        <Skeleton />
      </SkeletonContainer>
    );
  }

  return (
    <Container>
      <Title>카테고리</Title>
      <LinkList>
        {categories?.map((category) => (
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
const SkeletonContainer = styled.div`
  width: 16rem;
  height: 100%;
  margin: 1rem;
  border-radius: 1rem;
  overflow: hidden;
`;

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
