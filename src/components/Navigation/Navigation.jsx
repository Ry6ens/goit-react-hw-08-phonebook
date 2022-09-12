import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";
import { ReactComponent as Login } from "../../images/login.svg";

const getClassName = ({ isActive }) => {
  return isActive ? styles.activeLink : styles.link;
};

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.thumb}>
        <NavLink to="/goit-react-hw-08-phonebook" className={getClassName}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={getClassName}>
          Contacts
        </NavLink>
      </div>

      <div className={styles.thumb}>
        <NavLink to="/register" className={getClassName}>
          Sign Up
        </NavLink>
        <NavLink to="/login" className={getClassName}>
          <Login />
        </NavLink>
      </div>
    </nav>
  );
}
