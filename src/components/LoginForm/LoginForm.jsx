import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

import styles from "./LoginForm.module.scss";
import PhonebookOptions from "../PhonebookOptions/PhonebookOptions";

export default function LoginForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const emailId = nanoid();
  const passwordId = nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
    // addContact(state);
    e.target.reset(
      setState({
        email: "",
        password: "",
      })
    );
  };

  const handleChange = ({ target }) => {
    setState((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  return (
    <div>
      <div className={styles.modal__window}>
        <h1 className={styles.title}>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.overflow}>
            <label htmlFor={emailId}>
              <input
                id={emailId}
                className={styles.field}
                onChange={handleChange}
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Invalid email address"
                value={email}
                required
              />
            </label>
            <label htmlFor={passwordId}>
              <input
                id={passwordId}
                className={styles.field}
                onChange={handleChange}
                type="password"
                name="password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                title="Password can contain minimum eight characters, at least one letter and one number"
                value={password}
                required
              />
            </label>
          </div>
          <PhonebookOptions title="Log in" className={styles.button} />
        </form>
      </div>
    </div>
  );
}
