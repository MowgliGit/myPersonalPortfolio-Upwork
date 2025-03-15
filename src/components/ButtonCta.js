import { Link } from "react-router-dom";
import styles from "../styles/Buttons.module.css";

const ButtonCta = ({ text = "Default Text", link = "#" }) => {
  const isExternalLink = link.startsWith("https");

  return (
    <div className={styles.btnCta}>
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
        <Link to={link} className={styles.headingPrimaryLinkCta}>
          {text}
        </Link>
      )}
    </div>
  );
};

export default ButtonCta;
