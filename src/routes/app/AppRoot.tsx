import { Outlet } from "react-router-dom";
import AppLayout from "@components/AppLayout";

function AppRoot() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default AppRoot;
