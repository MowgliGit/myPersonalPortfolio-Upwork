import { Link } from "react-router-dom";
import styles from "../styles/Buttons.module.css";
import "../App.css"; // Keep your global styles as well

const ButtonSecondary = ({ text = "Default Text", link = "#" }) => {
  const isExternalLink = link.startsWith("https");

  return (
    <div className={styles.btnSecondary}>
      {/* External Link */}
      {isExternalLink ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryBtnLink}
        >
          {text}
          <ion-icon
            name="arrow-forward-outline"
            className={styles.arrowIcon}
          ></ion-icon>
        </a>
      ) : (
        // Internal Link for React Router
        <Link to={link} className={styles.secondaryBtnLink}>
          {text}
          <ion-icon
            name="arrow-forward-outline"
            className={styles.arrowIcon}
          ></ion-icon>
        </Link>
      )}
    </div>
  );
};

export default ButtonSecondary;
