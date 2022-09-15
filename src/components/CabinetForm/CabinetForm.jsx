import CabinetFormAside from "./CabinetFormAside/CabinetFormAside";
import CabinetFormYourAccount from "./CabinetFormYourAccount/CabinetFormYourAccount";
import styles from "./CabinetForm.module.scss";

export default function CabinetForm() {
  return (
    <div className={styles.cabinetForm}>
      <CabinetFormAside />
      <CabinetFormYourAccount />
    </div>
  );
}
