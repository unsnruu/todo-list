import { useState, useEffect, createContext, PropsWithChildren } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@services/firebase.service";

interface UserContextType {
  user: User | null;
}
const UserContext = createContext<UserContextType>({ user: null });

function UserProvider({ children }: PropsWithChildren) {
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
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
export default UserProvider;
export { UserContext };
