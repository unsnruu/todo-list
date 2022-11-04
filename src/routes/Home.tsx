import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import Header from "@components/Header";
import StyledLink from "@components/StyledLink";
import useTodoList from "@hooks/useTodoList";
import ShadowBox from "@components/ShadowBox";

function Home() {
  const { user } = useTodoList();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/app");
  }, [user, navigate]);

  return (
    <div>
      <Header>
        <ButtonContainer>
          <LogInLink to="auth/login">로그인</LogInLink>
          <SignUpLink to="auth/signup">회원가입</SignUpLink>
        </ButtonContainer>
      </Header>
      <Content>
        <ShadowBox>
          <h2>안녕하세요</h2>
          <p>방문해주셔서 감사합니다</p>
        </ShadowBox>
        <ShadowBox>
          <h2>사용방법</h2>
          <p>회원가입을 먼저 진행해주세요.</p>
          <p>
            회원가입 후 로그인을 하시면 자동으로 투두앱을 이용하실 수 있습니다.
          </p>
        </ShadowBox>
        <ShadowBox>
          <h2>어떤 사이트인가요?</h2>
          <p>카테고리를 활용하실 수 있는 투두리스트 앱입니다.</p>
        </ShadowBox>

        <ShadowBox>
          <h2>
            👷‍♀️ 진행중인 내용 <span>(2022.11.01 기준)</span>
          </h2>
          <StyledList>
            <li>기본적인 UI/UX 수정</li>
          </StyledList>
          <p>
            자세한 내용은{" "}
            <a
              href="https://github.com/unsnruu/todo-list/issues"
              target="_blank"
              rel="noreferrer"
            >
              깃허브 이슈
            </a>
            를 참조해주세요
          </p>
        </ShadowBox>
      </Content>
      <footer></footer>
    </div>
  );
}

export default Home;

const ButtonContainer = styled.div`
  & > a {
    margin-left: 1rem;
  }
`;
const LogInLink = styled(StyledLink)`
  color: ${({ theme }) => theme.color.dark};
`;
const SignUpLink = styled(StyledLink)`
  color: ${({ theme }) => theme.color.light};
  background-color: ${({ theme }) => theme.color.dark};
`;
const Content = styled.div`
  padding: 1rem;
  & > div {
    margin-bottom: 1rem;
  }
  & h2 {
    margin-bottom: 1rem;
  }
`;
const StyledList = styled.ul`
  margin-bottom: 1rem;
  & > li {
    margin-left: 2rem;
  }
`;
