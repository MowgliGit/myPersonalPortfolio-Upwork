import styles from "../styles/Buttons.module.css";
import "../App.css";
const ButtonSecondary = ({ text = "Default Text", link = "#" }) => {
  const isExternalLink = link.startsWith("https");

  return (
    <div className={styles.btnSecondary}>
      <a
        href={link}
        target={isExternalLink ? "_blank" : "_self"}
        rel={isExternalLink ? "noopener noreferrer" : ""}
        className={styles.secondaryBtnLink}
      >
        {text}{" "}
      </a>
      <ion-icon
        name="arrow-forward-outline"
        className={styles.arrowIcon}
      ></ion-icon>
    </div>
  );
};

export default ButtonSecondary;
