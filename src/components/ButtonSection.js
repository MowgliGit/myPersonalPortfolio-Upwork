import { Link } from "react-router-dom";
import styles from "../styles/Buttons.module.css";
import "../App.css"; // Keep your global styles as well

const ButtonSection = ({ text = "Default Text", link = "#" }) => {
  const isExternalLink = link.startsWith("https");

  return (
    <div className={styles.btnPrimary}>
      {/* Check if link is external */}
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
        // If it's an internal link (hash link for scrolling)
        <a href={link} className={styles.headingPrimaryLink}>
          {text}
        </a>
      )}
    </div>
  );
};

export default ButtonSection;
