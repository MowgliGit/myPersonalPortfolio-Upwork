import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import ButtonSecondary from "./ButtonSecondary";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function ServicesHome({ isMenuVisible, toggleMenu }) {
  return (
    <section className={`section ${styles.sectionServicesHome}`}>
      <div className="container">
        {isMenuVisible && (
          <Navigation isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        )}
        <div className="subTitle">
          <h3 className={styles.headingTertiary}>Services</h3>
          <span className={styles.line}></span>
        </div>
        <div className="grid grid--2--cols">
          <div className={styles.aboutImgBoxServices}>
            <img
              src={`${process.env.PUBLIC_URL}/images/responsive.webp`}
              className={`${styles.servicesImg} ${styles.servicesImgOne}`}
              alt="responsiveImage"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/webdevelopment.jpg`}
              className={`${styles.servicesImg} ${styles.servicesImgTwo}`}
              alt="webdevelopmentImage"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/webdesign.jpeg`}
              className={`${styles.servicesImg} ${styles.servicesImgThree}`}
              alt="webdesignImage"
            />
          </div>
          <div
            className={`
            ${styles.servicesAboutBoxText} ${styles.aboutBoxText}`}
          >
            <p className={styles.paragraphText}>
              As a front-end developer, I offer a range of services to bring
              your digital projects to life. I specialize in building
              responsive, user-friendly websites that engage visitors and drive
              results.
            </p>

            <p className={styles.paragraphText}>
              My work focuses on seamless navigation, dynamic components, and
              clean, efficient code. Every project features modern design,
              interactive elements, and a strong emphasis on user experience.
            </p>
          </div>
        </div>
        <div className={`${styles.btnSecondaryBox} ${styles.buttonWrapper}`}>
          <ButtonSecondary text="Learn More About Me" link="/services" />
        </div>
      </div>
    </section>
  );
}
