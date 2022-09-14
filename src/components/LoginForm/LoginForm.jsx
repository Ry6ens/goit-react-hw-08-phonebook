import { nanoid } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import styles from "./LoginForm.module.scss";
import { ReactComponent as Close } from "../../images/iconClose.svg";
import { login } from "../../redux/auth/auth-operations";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    logInUser(data);
    reset();
  };

  function logInUser(data) {
    dispatch(login(data));
  }

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <div className={styles.modal__container}>
      <div className={styles.cont}>
        <div className={styles.subCont}>
          <div className={styles.img}>
            <div className={styles.imgText}>
              <h2 className={styles.titleH2}>One of us?</h2>
              <p>
                If you already has an account, just Log In. We've missed you!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formLogIn}>
          <h2 className={styles.titleH2}>Log In</h2>
          <Link to="" className={styles.closeBtn} onClick={() => navigate(-1)}>
            <Close />
          </Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor={emailId} className={styles.label}>
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                className={styles.input}
                id={emailId}
                type="email"
                name="email"
                required
              />
            </label>
            <label htmlFor={passwordId} className={styles.label}>
              <span>Password</span>
              <input
                {...register("password", { required: true })}
                className={styles.input}
                id={passwordId}
                type="password"
                name="password"
                required
              />
            </label>
            <button className={styles.submit} type="submit">
              Log In
            </button>
          </form>

          <p className={styles.forgotPass}>Forgot Password ?</p>

          <div className={styles.socialMedia}>
            <ul className={styles.socialMediaList}>
              <li>
                <img
                  src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/facebook.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/twitter.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/linkedin.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/instagram.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
