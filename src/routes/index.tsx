import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "@routes/Root";
import Home from "@routes/Home";
import Login, { action as loginAction } from "@routes/auth/Login";
import SignUp, { action as signupAction } from "@routes/auth/SignUp";
import AppHome from "@routes/app/AppHome";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="auth">
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="signup" element={<SignUp />} action={signupAction} />
      </Route>
      <Route path="app" element={<AppHome />}></Route>
    </Route>
  )
);
