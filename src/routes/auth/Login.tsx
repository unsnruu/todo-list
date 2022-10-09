import * as React from "react";
import { Form, ActionFunctionArgs, redirect } from "react-router-dom";
import { logIn } from "@api/auth";

export async function action({ request, params }: ActionFunctionArgs) {
  let formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  //? 과연 이런 식의 코드가 파이어 베이스와 유용하게 쓰일 수 있을까라는 의문이 든다.
  if (typeof email !== "string" || typeof password !== "string") return;

  await logIn({ email, password });
  return redirect("/");
}

function Login() {
  return (
    <div>
      <h1>로그인</h1>
      <Form method="post" aria-label="로그인">
        <label>
          이메일
          <input type="text" name="email" />
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

export default Login;
