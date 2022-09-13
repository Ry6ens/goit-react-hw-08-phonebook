import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import styles from "./LoginForm.module.scss";
import { ReactComponent as Close } from "../../images/iconClose.svg";

export default function LoginForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = state;

  const emailId = nanoid();
  const passwordId = nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <form onSubmit={handleSubmit}>
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
            <button className={styles.submit} type="button">
              Log In
            </button>
          </form>

          <p className={styles.forgotPass}>Forgot Password ?</p>

          <div className={styles.socialMedia}>
            <ul>
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
