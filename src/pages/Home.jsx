import { Navigate } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm.jsx";
import useAuth from "../services/hooks/useAuth";

export default function Home() {
  const isAuth = useAuth();

  // if (isAuth) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <div className="backdrop">
      <div className="backdropGradient">{!isAuth && <LoginForm />}</div>
    </div>
  );
}
