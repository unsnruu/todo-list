import * as React from "react";
import { Form } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>로그인</h1>
      <Form method="post" aria-label="로그인">
        <input type="text" />
        <label>
          비밀번호
          <input type="password" />
        </label>
        <button>제출</button>
      </Form>
    </div>
  );
}

export default Login;
