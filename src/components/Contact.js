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
           
            <div>
              <h2 className={styles.headingSecondary}>Interested in working together?</h2>
              <p className={styles.paragraphPrimaryContact}>Let’s build something amazing. Feel free to reach out to me via any of the following options.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
