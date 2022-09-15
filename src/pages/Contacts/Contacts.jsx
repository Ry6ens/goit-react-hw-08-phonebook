import Section from "../../components/Section/Section";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import styles from "./Contacts.module.scss";
import { Container } from "../../components/Container/Container";

export default function Contacts() {
  return (
    <>
      <div className="backdrop">
        <div className="backdropGradient">
          <Container>
            <div className={styles.contacts}>
              <div className={styles.contactForm}>
                <Section title="Phonebook">
                  <ContactForm />
                </Section>
              </div>
              <div className={styles.list}>
                <Filter />
                <ContactList />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
