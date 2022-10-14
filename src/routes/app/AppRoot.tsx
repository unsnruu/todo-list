import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AppLayout from "@components/AppLayout";
import CategoryProvider from "@context/categoryContext";
import useUser from "@hooks/useUser";

function AppRoot() {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, user]);

  return (
    <CategoryProvider>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </CategoryProvider>
  );
}

export default AppRoot;
