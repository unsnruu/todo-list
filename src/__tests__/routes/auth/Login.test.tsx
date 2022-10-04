import { render, screen } from "@testing-library/react";
import Login from "@routes/auth/Login";

describe("<Login/> UI", () => {
  render(<Login />);
  it("로그인 글자 출력", () => {
    // render(<Login />);
    const title = screen.getByRole("heading", { name: "로그인" });
    expect(title).toBeInTheDocument();
  });
  it("form", () => {
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  it("submit button", () => {
    const btn = screen.getByRole("button", { name: "제출" });
    expect(btn).toBeInTheDocument();
  });
});
