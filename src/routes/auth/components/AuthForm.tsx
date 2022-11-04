import { Form } from "react-router-dom";
import styled from "@emotion/styled";

function AuthForm() {
  return (
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
  );
}
export default AuthForm;

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
