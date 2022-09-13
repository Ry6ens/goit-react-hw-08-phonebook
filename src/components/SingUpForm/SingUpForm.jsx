import { useNavigate, Link } from "react-router-dom";

// import styles from "./SingUpForm.module.scss";
import "./SingUpForm.css";
import { ReactComponent as Close } from "../../images/iconClose.svg";

export default function SingUpForm() {
  const navigate = useNavigate();

  return (
    <div className="modal__container">
      <div className="contt">
        <div className="form sign-in">
          <h2 className="titleH2">Sign In</h2>
          <Link to="" className="closeBtn" onClick={() => navigate(-1)}>
            <Close />
          </Link>
          <form action="">
            <label>
              <span>Email Address</span>
              <input type="email" name="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" />
            </label>
            <button className="submit" type="button">
              Sign In
            </button>
          </form>

          <p className="forgot-pass">Forgot Password ?</p>

          <div className="social-media">
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
        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <h2 className="titleH2">One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
