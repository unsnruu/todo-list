import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";

function Root() {
  return (
    <div>
      <Layout />
      <Outlet />
    </div>
  );
}

export default Root;
