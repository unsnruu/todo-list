import styled from "@emotion/styled";
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";

import authService from "@services/auth.service";
import ShadowBox from "@components/ShadowBox";

function SignUp() {
  return (
    <Container>
      <ShadowBox>
        <h1>회원가입</h1>
        <StyledForm method="post" aria-label="로그인">
          <label>
            이메일
            <br />
            <input type="text" name="email" />
          </label>
          <label>
            비밀번호
            <br />
            <input type="password" name="password" />
          </label>
          <button>제출</button>
        </StyledForm>
      </ShadowBox>
    </Container>
  );
}
export default SignUp;

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  if (typeof email !== "string" || typeof password !== "string") return;

  await authService.signUp({ email, password });
  return redirect("/");
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  & input {
    border: none;
    background-color: transparent;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    padding: 0.5rem;
  }
  & label {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  & input:focus {
    outline: none;
  }
  & button {
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.color.primary};
    color: white;
    cursor: pointer;
  }
`;
