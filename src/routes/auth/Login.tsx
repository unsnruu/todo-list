import styled from "@emotion/styled";
import { ActionFunctionArgs, redirect } from "react-router-dom";

import authService from "@services/auth.service";
import ShadowBox from "@components/ShadowBox";
import AuthForm from "./components/AuthForm";

function Login() {
  return (
    <Container>
      <ShadowBox>
        <h1>로그인</h1>
        <AuthForm />
      </ShadowBox>
    </Container>
  );
}

export default Login;

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  if (typeof email !== "string" || typeof password !== "string") return;

  await authService.logIn({ email, password });
  return redirect("/");
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
