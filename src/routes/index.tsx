import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login, { action as loginAction } from "@routes/auth/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/login" element={<Login />} action={loginAction}></Route>
  )
);
