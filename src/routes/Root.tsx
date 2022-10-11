import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <h1>Root</h1>
      <Outlet />
    </div>
  );
}

export default Root;
