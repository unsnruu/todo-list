import authService from "@services/auth.service";
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <h1>회원가입</h1>
      <Form aria-label="회원가입" method="post">
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

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  if (typeof email !== "string" || typeof password !== "string") return;

  await authService.signUp({ email, password });
  return redirect("/");
}

export default SignUp;
