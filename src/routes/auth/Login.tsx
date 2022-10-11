import { Form, ActionFunctionArgs, redirect } from "react-router-dom";
import { logIn } from "@api/auth";

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

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
