import { Link } from "react-router-dom";
import styles from "../styles/Buttons.module.css";
import "../App.css";
const ButtonSecondary = ({ text = "Default Text", link = "#" }) => {
  const isExternalLink = link.startsWith("https");

  return (
    <div className={styles.btnSecondary}>
      {isExternalLink ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryBtnLink}
        >
          {text}{" "}
        </a>
      ) : (
        <Link to={link} className={styles.secondaryBtnLink}>
          {text}{" "}
        </Link>
      )}
      <ion-icon
        name="arrow-forward-outline"
        className={styles.arrowIcon}
      ></ion-icon>
    </div>
  );
};

export default ButtonSecondary;
