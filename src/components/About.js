import Navigation from "./Navigation";
import Resume from "./Resume";
import Skills from "./Skills";
import Logo from "./Logo";
import styles from "../styles/About.module.css";
import Footer from "./Footer";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonSection from "./ButtonSection";

export default function About() {
  return (
    <>
      <section className={`${styles.sectionAbout} `}>
        <Navigation />
        <div className={styles.containerAbout}>
          <div className={styles.subHeading}>
            <h6>Resume</h6>
            <span className={styles.line}></span>
          </div>
          <div>
            <h2 className={styles.headingSecondary}>
              A Snapshot of My Skills & Experience
            </h2>
          </div>
          <div className="btnCentre">
            <ButtonSection
              text="See My Skills & Experience"
              link="#sectionResume"
            />
          </div>
        </div>
      </section>
      <section className={styles.sectionAboutBox} id="sectionResume">
        <div className="container">
          <Resume />
          <Skills />
          <Logo />
        </div>
      </section>
      <Footer />
    </>
  );
}
