import { Link } from "react-router-dom";
import styles from "../styles/Buttons.module.css";

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
        // Use <a> tag for internal links to enable scrolling to sections
        <a href={link} className={styles.headingPrimaryLink}>
          {text}
        </a>
      )}
    </div>
  );
};

export default ButtonPrimary;
