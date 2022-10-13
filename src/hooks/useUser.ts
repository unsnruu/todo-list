import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";

import { auth } from "@services/firebase.service";

function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return user;
}
export default useUser;
