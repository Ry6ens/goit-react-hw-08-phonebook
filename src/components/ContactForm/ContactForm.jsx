import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import styles from "./ContactForm.module.scss";
import stylesButton from "../PhonebookOptions/PhonebookOptions.module.scss";
import PhonebookOptions from "../PhonebookOptions/PhonebookOptions";
import { postContactsOperations } from "../../redux/operations";

export default function Form() {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      number: "",
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(postContactsOperations(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formGroup}>
      <div className={styles.thumb}>
        <label>
          <span className={styles.labelTitle}>Name</span>
          <input
            {...register("name", { required: true })}
            className={styles.field}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
      </div>
      <div className={styles.thumb}>
        <label>
          <span className={styles.labelText}>Number</span>
          <input
            {...register("number", { required: true })}
            className={styles.field}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="+380 (99) 999-99-99"
            required
          />
        </label>
      </div>
      <PhonebookOptions title="Add contact" className={stylesButton.button} />
    </form>
  );
}
