import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "@routes/Root";
import Home from "@routes/Home";
import Login, { action as loginAction } from "@routes/auth/Login";
import SignUp, { action as signupAction } from "@routes/auth/SignUp";
import AppLayout from "@routes/app/AppLayout";
import AppHome from "@routes/app/AppHome";
import TodoList from "@routes/app/TodoList";
import TodoEdit from "./app/TodoEdit";
import CategoryList from "@routes/app/CategoryList";
import CategoryEdit from "./app/CategoryEdit";
import AuthLayout from "./auth/AuthLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="signup" element={<SignUp />} action={signupAction} />
      </Route>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<AppHome />} />
        <Route path="todo/:category" element={<TodoList />} />
        <Route path="category" element={<CategoryList />}></Route>
        <Route path="edit">
          <Route path="todo/:category/:id" element={<TodoEdit />} />
          <Route path="category/:id" element={<CategoryEdit />} />
        </Route>
      </Route>
    </Route>
  )
);
