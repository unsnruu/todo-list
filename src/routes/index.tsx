import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "@routes/Root";
import Login, { action as loginAction } from "@routes/auth/Login";

//todo: auth obeserver로 element 삼항 연산!
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/login" element={<Login />} action={loginAction}></Route>
    </Route>
  )
);
