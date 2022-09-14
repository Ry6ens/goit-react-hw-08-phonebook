import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import styles from "./SingUpForm.module.scss";
import { ReactComponent as Close } from "../../images/iconClose.svg";
import { signup } from "../../redux/auth/auth-operations";

export default function SingUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = ({ name, email, password }, e) => {
    e.preventDefault();
    addUser({ name, email, password });
    reset();
  };

  function addUser(data) {
    dispatch(signup(data));
  }

  const watchFieldPassword = watch("password");
  const watchFieldConfirmPassword = watch("confirmPassword");

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);
  const confirmPasswordId = useMemo(() => nanoid(), []);

  return (
    <div className={styles.modal__container}>
      <div className={styles.cont}>
        <div className={styles.formSignIn}>
          <h2 className={styles.titleH2}>Sign Up</h2>
          <Link to="" className={styles.closeBtn} onClick={() => navigate(-1)}>
            <Close />
          </Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor={nameId} className={styles.label}>
              <span>Name</span>
              <input
                {...register("name", {
                  required: true,
                  pattern:
                    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                })}
                id={nameId}
                className={styles.input}
                type="name"
                name="name"
                required
              />
            </label>
            <label htmlFor={emailId} className={styles.label}>
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                id={emailId}
                className={styles.input}
                type="email"
                name="email"
                required
              />
            </label>
            <label htmlFor={passwordId} className={styles.label}>
              <span>Password</span>
              <input
                {...register("password", { required: true })}
                id={passwordId}
                className={styles.input}
                type="password"
                name="password"
                required
              />
            </label>
            <label
              {...register("confirmPassword", { required: true })}
              htmlFor={confirmPasswordId}
              className={styles.label}
            >
              <span>confirm Password</span>
              <input
                className={styles.input}
                id={confirmPasswordId}
                type="password"
                name="confirmPassword"
                required
              />
            </label>
            <button
              className={styles.submit}
              type="submit"
              disabled={
                watchFieldPassword !== watchFieldConfirmPassword ? true : false
              }
            >
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
