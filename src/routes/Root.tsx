import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";

import { auth } from "@services/firebase.service";
import Layout from "@components/Layout";

function Root() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Layout>
      <Outlet context={user} />
    </Layout>
  );
}

export default Root;
