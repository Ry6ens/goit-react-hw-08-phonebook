import {} from "@reduxjs/toolkit";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import jwt_decode from "jwt-decode";

import styles from "./LoginForm.module.scss";
import { login, googleLogIn } from "../../redux/auth/auth-operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:
  //       "472631042467-p0vitv9hkneo0l2s5bljos28dojdrcc2.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });

  //   // google.accounts.id.prompt();

  //   google.accounts.id.renderButton(document.getElementById("singInDiv"), {
  //     theme: "outline",
  //     type: "icon",
  //     size: "large",
  //   });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    logInUser(data);
    reset();
  };

  function logInUser(data) {
    dispatch(login(data));
  }

  // function handleCallbackResponse(response) {
  //   const userObj = jwt_decode(response.credential);
  //   dispatch(googleLogIn(userObj));
  // }

  return (
    <div className={styles.modal__container}>
      <div className={styles.cont}>
        <div className={styles.subCont}>
          <div className={styles.img}>
            <div className={styles.imgText}>
              <h2 className={styles.titleH2}>New here?</h2>
              <p>Sign Up and discover great amount of new opportunities!</p>
              <div className={styles.submitSignUpOverLay}>
                <Link to="/register" className={styles.submitSignUp}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formLogIn}>
          <h2 className={styles.titleH2}>Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label}>
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                className={styles.input}
                type="email"
                name="email"
                required
              />
            </label>
            <label className={styles.label}>
              <span>Password</span>
              <input
                {...register("password", { required: true })}
                className={styles.input}
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
                <div id="singInDiv"></div>
              </li>
              {/* <li>
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
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
