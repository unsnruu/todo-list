import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AppLayout from "@components/AppLayout";
import useTodoList from "@hooks/useTodoList";

function AppRoot() {
  const { user } = useTodoList();
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
