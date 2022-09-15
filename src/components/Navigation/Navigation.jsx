import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Navigation.module.scss";
import { getIsLogin } from "../../redux/auth/auth-selectors";
import UserMenu from "../UserMenu/UserMenu";
import { items } from "./items";

const getClassName = ({ isActive }) => {
  return isActive ? styles.activeLink : styles.link;
};

export default function Navigation() {
  const isAuth = useSelector(getIsLogin);

  const selectItems = isAuth ? items : items.filter((el) => !el.private);
  const elements = selectItems.map(({ id, to, text }) => (
    <li key={id} className={styles.item}>
      <NavLink to={to} className={getClassName}>
        {to === "/cabinet" ? <UserMenu /> : text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{elements}</ul>
    </nav>
  );
}
