import { User } from "firebase/auth";
// import { useContext } from "react";
// import { UserContext } from "../context/userContext";
import { useOutletContext } from "react-router-dom";

type UserType = null | User;

export default function useUser() {
  return useOutletContext<UserType>();
}
