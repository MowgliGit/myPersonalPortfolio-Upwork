import { Link } from "react-router-dom";
import styles from "../styles/Buttons.module.css";

const ButtonSecondary = ({ text = "Default Text", link = "#" }) => {
  const isExternalLink = link.startsWith("https");

  return (
    <div className={styles.btnSecondary}>
      {isExternalLink ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headingSecondaryLink}
        >
          {text}
        </a>
      ) : (
        // Make sure to use Link here for internal navigation
        <Link to={link} className={styles.headingSecondaryLink}>
          <button className={styles.button}>{text}</button>
        </Link>
      )}
    </div>
  );
};

export default ButtonSecondary;
