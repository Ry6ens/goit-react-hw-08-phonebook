import { useSelector, useDispatch } from "react-redux";

import styles from "./CabinetFormYourAccount.module.scss";
import {
  getUserName,
  getUserEmail,
  getUserAvatar,
} from "../../../redux/auth/auth-selectors";
import { logout } from "../../../redux/auth/auth-operations";

export default function CabinetFormYourAccount() {
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);
  const avatar = useSelector(getUserAvatar);

  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.cabinetYourAccount}>
      <h2 className={styles.title}>Your account</h2>
      <div className={styles.avatar}>
        <p className={styles.profileTitle}>Profile Photo</p>
        <div className={styles.profileChangePhoto}>
          <div className={styles.profilePhoto}>
            <img
              src={avatar}
              alt={avatar && name}
              width={avatar && "80"}
              height={avatar && "80"}
            />
          </div>
          <div className={styles.btnOverLay}>
            <button className={styles.btn}>Remove photo</button>
            <button className={styles.btn}>Change photo</button>
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <hr className={styles.lineStyles} />
      </div>
      <div className={styles.profileName}>
        <div>
          <h3>Name</h3>
          <p className={styles.titleName}>{name}</p>
        </div>
        <button className={styles.btnEdit}>Edit</button>
      </div>
      <div className={styles.line}>
        <hr className={styles.lineStyles} />
      </div>
      <div className={styles.profileName}>
        <div>
          <h3>Email</h3>
          <p className={styles.titleEmail}>{email}</p>
        </div>
        <div className={styles.btnOverLay}>
          <button className={styles.btnEdit}>Edit</button>
        </div>
      </div>
      <div className={styles.line}>
        <hr className={styles.lineStyles} />
      </div>
      <div className={styles.btnLogOutOverLay}>
        <button className={styles.btnLogOut} onClick={handleClickLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}
