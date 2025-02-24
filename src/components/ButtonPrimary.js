import styles from "../styles/Buttons.module.css";
import "../App.css";

const ButtonPrimary = ({ text = "Default Text", link = "#" }) => {
  const isExternalLink = link.startsWith("https");

  return (
    <div className={styles.btnPrimary}>
      <a
        href={link}
        target={isExternalLink ? "_blank" : "_self"}
        rel={isExternalLink ? "noopener noreferrer" : ""}
        className={styles.headingPrimaryLink}
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonPrimary;
