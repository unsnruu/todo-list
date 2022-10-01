import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./auth/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Login />}></Route>)
);