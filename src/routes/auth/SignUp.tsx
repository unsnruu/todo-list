import styled from "@emotion/styled";
import { ActionFunctionArgs, redirect } from "react-router-dom";

import authService from "@services/auth.service";
import ShadowBox from "@components/ShadowBox";
import AuthForm from "./components/AuthForm";

function SignUp() {
  return (
    <Container>
      <ShadowBox>
        <h1>회원가입</h1>
        <AuthForm />
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
