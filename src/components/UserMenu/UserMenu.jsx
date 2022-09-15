import styles from "./UserMenu.module.scss";
import { ReactComponent as Login } from "../../images/login.svg";

export default function UserMenu() {
  return (
    <div className={styles.usermenu}>
      <Login />
    </div>
  );
}
