import { Outlet, useNavigate } from "react-router-dom";
import AppLayout from "@components/AppLayout";
import { useEffect } from "react";
import useUser from "@hooks/useUser";

function AppRoot() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, user]);

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default AppRoot;
