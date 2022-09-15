import { useSelector } from "react-redux";

import { getIsLogin } from "../../redux/auth/auth-selectors";

export default function useAuth() {
  const isAuth = useSelector(getIsLogin);

  return isAuth;
}
