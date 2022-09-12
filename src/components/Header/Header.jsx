import styles from "./Header.module.scss";
import { Container } from "../Container/Container";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
