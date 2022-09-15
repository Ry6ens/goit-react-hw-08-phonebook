import { Navigate } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm";
import useAuth from "../services/hooks/useAuth";

export default function Login() {
  const isAuth = useAuth();

  if (isAuth) {
    return <Navigate to="/contacts" />;
  }

  return <>{!isAuth && <LoginForm />}</>;
}
