import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "../styles/Contact.module.css";
import "../App.css";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <div className={styles.mainContactPage}>
        <section className={`${styles.sectionContact} `}>
          <Navigation />
          <div className={styles.containerContact}>
            <div className={styles.subHeading}>
              <h6>Contact</h6>
              <span className={styles.line}></span>
            </div>
            <div>
              <h2 className={styles.headingSecondary}>Ready to Collaborate?</h2>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
