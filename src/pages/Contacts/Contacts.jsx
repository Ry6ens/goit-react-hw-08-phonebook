import Section from "../../components/Section/Section";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <>
      <div className={styles.contacts}>
        <div>
          <Section title="Phonebook">
            <ContactForm />
          </Section>
        </div>
        <div className={styles.list}>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
}
