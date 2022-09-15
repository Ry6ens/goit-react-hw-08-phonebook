import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm.jsx";
import useAuth from "../services/hooks/useAuth";

export default function Home() {
  const isAuth = useAuth();
  const navigate = useNavigate();

  if (isAuth) {
    return navigate("/contacts", { replace: true });
  }

  return <>{!isAuth && <LoginForm />}</>;
}
