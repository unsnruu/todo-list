import { Form } from "react-router-dom";

export async function action() {}

function SignUp() {
  return (
    <div>
      <h1>회원가입</h1>
      <Form aria-label="회원가입">
        <label>
          이메일
          <input type="text" name="d" />
        </label>
        <label>
          비밀번호
          <input type="password" name="password" />
        </label>
        <button>제출</button>
      </Form>
    </div>
  );
}

export default SignUp;
