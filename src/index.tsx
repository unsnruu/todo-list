import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { Global, ThemeProvider, Theme, css } from "@emotion/react";

import { router } from "@routes/router";
import RootProvider from "@context/rootContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme: Theme = {
  color: {
    primary: "#AAC4FF",
    secondary: "#D2DAFF",
    dark: "#B1B2FF",
    light: "#EEF1FF",
  },
};
const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
`;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <RootProvider>
        <RouterProvider router={router} />
      </RootProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
