import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import styles from "./ContactList.module.scss";
import { getFilterContacts } from "../../redux/selectors";
import {
  getContactsOperations,
  removeContactsOperation,
} from "../../redux/operations";
import { ReactComponent as Bin } from "../../images//bin.svg";

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(getContactsOperations());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function removeContact(id) {
    dispatch(removeContactsOperation(id));
  }

  return (
    <>
      <ul className={styles.list}>
        {contactsFilter.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.item}>
              <div className={styles.itemThumb}>
                <div className={styles.info}>
                  <p className={styles.infoName}>{name}</p>
                  <p className={styles.infoNumber}>{number}</p>
                </div>

                <button
                  className={styles.btnRemove}
                  type="button"
                  onClick={() => {
                    removeContact && removeContact(id);
                  }}
                >
                  <Bin />
                </button>
                {/* <PhonebookOptions
                  id={id}
                  title="Remove"
                  className={stylesButton.removeBtn}
                  removeItem={removeContact}
                /> */}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
