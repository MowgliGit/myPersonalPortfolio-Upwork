import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import ButtonSecondary from "./ButtonSecondary";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function AboutMe({ isMenuVisible, toggleMenu }) {
  return (
    <section className={`section ${styles.sectionAboutMe}`}>
      <div className="container">
        {isMenuVisible && (
          <Navigation isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        )}
        <div className="subTitle">
          <h3 className={styles.headingTertiary}>About me</h3>
          <span className={styles.line}></span>
        </div>
        <div className="grid grid--2-cols">
          <div className={styles.aboutBoxText}>
            <h3 className={styles.headingQuaternary}>
              Hi, I'm <span>Marina</span>
            </h3>
            <p className={styles.paragraphText}>
              A front-end developer specializing in custom, high-performance
              websites. No WordPress, no Shopify, just clean, modern code built
              from scratch.
            </p>
            <p className={styles.paragraphText}>
              I help businesses establish a strong online presence with fast,
              user-friendly, and visually compelling web experiences. Whether
              you need a landing page, portfolio, or a full business website, I
              create solutions that are tailored to your brand and built to
              last.
            </p>
          </div>
          <div className={styles.aboutImgBox}>
            {/* <div className={styles.aboutFlotText}>
              <span className={styles.number}>3</span>
            </div> */}
            <img
              src={`${process.env.PUBLIC_URL}/images/aboutMe.webp`}
              className={styles.aboutMeImg}
              alt="aboutMeImg"
            />
            {/* <p className={styles.textNumber}>
              Years of <span>Experience</span>
            </p> */}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonSecondary text="Learn More About Me" link="/about" />
        </div>
      </div>
    </section>
  );
}
