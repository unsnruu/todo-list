import styled from "@emotion/styled";

import Header from "@components/Header";
import StyledLink from "@components/StyledLink";

function Home() {
  return (
    <div>
      <Header>
        <ButtonContainer>
          <LogInLink to="auth/login">로그인</LogInLink>
          <SignUpLink to="auth/signup">회원가입</SignUpLink>
        </ButtonContainer>
      </Header>
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
