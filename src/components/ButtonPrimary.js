import { Link } from "react-router-dom";
import styles from "../styles/Buttons.module.css";
import "../App.css";

const ButtonPrimary = ({ text = "Default Text", link = "#" }) => {
  const isExternalLink = link.startsWith("https");

  return (
    <div className={styles.btnPrimary}>
      {isExternalLink ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headingPrimaryLink}
        >
          {text}
        </a>
      ) : (
        <Link to={link} className={styles.headingPrimaryLink}>
          {text}{" "}
        </Link>
      )}
    </div>
  );
};

export default ButtonPrimary;
