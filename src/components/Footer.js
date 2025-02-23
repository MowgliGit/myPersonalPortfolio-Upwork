import styles from "../styles/Footer.module.css";
import "../App.css";
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <>
      <div className={` ${styles.sectionFooter} `}>
        <div>
          <div className={styles.footerContainer}>
            <div className={styles.footerContact}>
              <h4 className={styles.headingQuaternary}>
                <span>Contact me</span>
              </h4>

              <p className={styles.copyRight}>
                <p>Copyright © {currentYear} Mowgli.</p>
                <p>All Rights Reserved.</p>
              </p>
            </div>
            <div className={styles.footerBtnLinks}>
              <button className={styles.btnFooterLink}>
                <ion-icon
                  name="mail-outline"
                  className={styles.navIcon}
                ></ion-icon>
                <a
                  href="mailto:themowglicoder@gmail.com"
                  className={styles.footerLink}
                >
                  themowglicoder@gmail.com
                </a>
              </button>
              <button className={styles.btnFooterLink}>
                <ion-icon
                  name="logo-linkedin"
                  className={styles.navIcon}
                ></ion-icon>
                <a
                  href="https://www.linkedin.com/in/marina-jovanova/"
                  className={styles.footerLink}
                >
                  Linkedin
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
