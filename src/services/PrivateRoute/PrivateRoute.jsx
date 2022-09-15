import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

export default function PrivateRoute() {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/goit-react-hw-08-phonebook" />;
  }
  return <Outlet />;
}
