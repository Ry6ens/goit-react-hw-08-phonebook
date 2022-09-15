import { useSelector } from "react-redux";

import styles from "./CabinetFormAside.module.scss";
import {
  getUserName,
  getUserEmail,
  getUserAvatar,
} from "../../../redux/auth/auth-selectors";

export default function CabinetForm() {
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);
  const avatar = useSelector(getUserAvatar);

  return (
    <>
      <div className={styles.cabinetFormAside}>
        <div className={styles.AryMsQ}>
          <div className={styles.bOskhw}>
            <div className={styles.avatar}>
              <img
                src={avatar}
                alt={avatar && name}
                width={avatar && "40"}
                height={avatar && "40"}
              />
            </div>
          </div>
          <div className="bDSpVA">
            <p className={styles.avatarName}>{name}</p>
            <p className="fFOiLQ _2xcaIA _5Ob-nQ _8FeN8Q _-bsk3w GHIRjw">
              {email}
            </p>
          </div>
        </div>
        <div className={styles.yourAccount}>
          <span aria-hidden="true" className={styles.yourAccountLogo}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm6.233 15.77A8.46 8.46 0 0 1 12 20.5a8.46 8.46 0 0 1-6.234-2.73A8.467 8.467 0 0 1 3.5 12c0-4.7 3.8-8.5 8.5-8.5a8.493 8.493 0 0 1 6.233 14.27Z"
                fill="currentColor"
              ></path>
              <path
                d="m13.522 12.448-.053.044c.018-.016.037-.029.053-.044Zm-3.225-.192c-.032-.037-.064-.073-.093-.112.03.038.062.075.093.112Zm1.16.721h.001a.6.6 0 0 0-.019-.006l.018.006Zm-.926-.485c-.018-.015-.037-.029-.054-.045.017.016.036.029.054.045Zm2.012.485.017-.006a.6.6 0 0 1-.019.006h.002Zm1.16-.721c.032-.037.063-.073.092-.112-.029.038-.061.075-.092.112Z"
                fill="currentColor"
              ></path>
              <path
                d="M14.584 13.505A3.733 3.733 0 0 0 15.75 10.8 3.755 3.755 0 0 0 12 7.05a3.754 3.754 0 0 0-3.75 3.75 3.73 3.73 0 0 0 1.166 2.705 6.537 6.537 0 0 0-3.007 2.721c.321.426.684.816 1.093 1.157a4.97 4.97 0 0 1 3.995-2.884c.166.023.841.023 1.008 0a4.974 4.974 0 0 1 3.996 2.884c.407-.342.774-.73 1.092-1.157a6.552 6.552 0 0 0-3.009-2.721Zm-1.062-1.057-.053.044a2.233 2.233 0 0 1-.909.48l-.017.005-.001.001a2.307 2.307 0 0 1-.542.072c-.188 0-.367-.03-.542-.073h-.001l-.018-.006a2.239 2.239 0 0 1-.908-.479c-.018-.015-.037-.029-.054-.045a2.707 2.707 0 0 1-.399-.49 2.172 2.172 0 0 1-.093-.171 2.182 2.182 0 0 1-.081-.177 2.349 2.349 0 0 1-.074-.238c-.013-.05-.03-.099-.04-.15a2.25 2.25 0 1 1 4.418-.001c-.01.051-.026.099-.039.149-.022.081-.044.162-.074.239-.078.19-.178.37-.299.535-.029.039-.061.075-.092.112a2.37 2.37 0 0 1-.182.193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.477 12.447c-.064-.059-.122-.125-.18-.191.058.067.116.131.18.191Zm3.731-1.227c-.01.051-.026.099-.039.149.012-.049.029-.097.039-.149Zm-.114.388c-.024.06-.051.119-.08.177.028-.058.057-.116.08-.177Zm-4.108.177a2.182 2.182 0 0 1-.081-.177c.024.061.053.119.081.177Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <p className="fFOiLQ _5Ob-nQ I-IZwQ fM_HdA GHIRjw E3X2Bg">
            Your account
          </p>
        </div>
        <div className={styles.yourAccount}>
          <span aria-hidden="true" className={styles.yourAccountLogo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.75 14.33v3.03a.75.75 0 0 1-1.5 0v-3.03c-.6-.3-1.03-.94-1.03-1.69 0-1.02.8-1.85 1.78-1.85s1.78.83 1.78 1.85c0 .75-.42 1.4-1.03 1.69zM6 8h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2zm0 1.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h12a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6zM7.5 8H6a6 6 0 1 1 12 0h-1.5a4.5 4.5 0 1 0-9 0z"
              ></path>
            </svg>
          </span>
          <p className="fFOiLQ _5Ob-nQ I-IZwQ fM_HdA GHIRjw E3X2Bg">
            Login &amp; security
          </p>
        </div>
        <div className={styles.yourAccount}>
          <span aria-hidden="true" className={styles.yourAccountLogo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20.37 5.03A2 2 0 0 1 22 7v10a2 2 0 0 1-1.96 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16.1H4zm.13 2.07-4.53 5.31 4.53 4.63a.5.5 0 0 0 0-.04V7.1zm-17-.14a.5.5 0 0 0 0 .04v10a.5.5 0 0 0 0 .04l4.59-4.7L3.5 6.97zm5.57 6.53-3.92 4 13.7.01L15 13.56a4 4 0 0 1-5.93-.07zm9.88-6.99H5l5.07 5.96a2.5 2.5 0 0 0 3.81 0l5.07-5.96z"
              ></path>
            </svg>
          </span>
          <p className="fFOiLQ _5Ob-nQ I-IZwQ fM_HdA GHIRjw E3X2Bg">
            Email preferences
          </p>
        </div>
        <div className={styles.line}>
          <hr className={styles.lineStyles} />
        </div>
      </div>
    </>
  );
}
