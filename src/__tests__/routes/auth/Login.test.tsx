import { render, screen } from "@testing-library/react";

import {
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "@routes/auth/Login";

const router = createMemoryRouter(
  createRoutesFromElements(<Route path="/" element={<Login />} />)
);

describe("<Login/> UI", () => {
  it("로그인 글자 출력", () => {
    render(<RouterProvider router={router} />);
    const title = screen.getByRole("heading", { name: "로그인" });
    expect(title).toBeInTheDocument();
  });

  it("form", () => {
    render(<RouterProvider router={router} />);

    const form = screen.getByRole("form", { name: "로그인" });
    expect(form).toBeInTheDocument();
  });
  it("inputs", () => {
    render(<RouterProvider router={router} />);

    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("submit button", () => {
    render(<RouterProvider router={router} />);
    const btn = screen.getByRole("button", { name: "제출" });
    expect(btn).toBeInTheDocument();
  });
});
