import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./Login";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Login />}></Route>)
);
