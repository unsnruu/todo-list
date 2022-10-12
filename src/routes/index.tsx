import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "@routes/Root";
import Login, { action as loginAction } from "@routes/auth/Login";
import SignUp, { action as signupAction } from "@routes/auth/SignUp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="auth">
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="signup" element={<SignUp />} action={signupAction} />
      </Route>
      <Route path="app"></Route>
    </Route>
  )
);
