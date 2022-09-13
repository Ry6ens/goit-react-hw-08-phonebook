import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import styles from "./SingUpForm.module.scss";
import { ReactComponent as Close } from "../../images/iconClose.svg";

export default function SingUpForm() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = state;

  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();
  const confirmPasswordId = nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset(
      setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    );
  };

  const handleChange = ({ target }) => {
    setState((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  return (
    <div className={styles.modal__container}>
      <div className={styles.cont}>
        <div className={styles.formSignIn}>
          <h2 className={styles.titleH2}>Sign Up</h2>
          <Link to="" className={styles.closeBtn} onClick={() => navigate(-1)}>
            <Close />
          </Link>
          <form onSubmit={handleSubmit}>
            <label htmlFor={nameId} className={styles.label}>
              <span>Name</span>
              <input
                className={styles.input}
                onChange={handleChange}
                id={nameId}
                type="name"
                name="name"
                value={name}
                required
              />
            </label>
            <label htmlFor={emailId} className={styles.label}>
              <span>Email</span>
              <input
                className={styles.input}
                onChange={handleChange}
                id={emailId}
                type="email"
                name="email"
                value={email}
                required
              />
            </label>
            <label htmlFor={passwordId} className={styles.label}>
              <span>Password</span>
              <input
                className={styles.input}
                onChange={handleChange}
                id={passwordId}
                type="password"
                name="password"
                value={password}
                required
              />
            </label>
            <label htmlFor={confirmPasswordId} className={styles.label}>
              <span>confirm Password</span>
              <input
                className={styles.input}
                onChange={handleChange}
                id={confirmPasswordId}
                type="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                required
              />
            </label>
            <button className={styles.submit} type="submit">
              Sign Up Now
            </button>
          </form>
        </div>
        <div className={styles.subCont}>
          <div className={styles.img}>
            <div className={styles.imgText}>
              <h2 className={styles.titleH2}>New here?</h2>
              <p>Sign Up and discover great amount of new opportunities!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//m-up
