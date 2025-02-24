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
              I'm a designer and developer passionate about creating clean,
              modern, and user-friendly web designs. I specialize in optimizing
              websites for search engines to drive more traffic and increase
              visibility.
            </p>
            <p className={styles.paragraphText}>
              I’ve built a range of responsive, interactive, and dynamic
              websites that are both visually appealing and high-performing.
              Using modern frameworks like React, I ensure seamless user
              experiences and top-notch performance.
            </p>
          </div>
          <div className={styles.aboutImgBox}>
            <div className={styles.aboutFlotText}>
              <span className={styles.number}>3</span>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/aboutMe.webp`}
              className={styles.aboutMeImg}
              alt="aboutMeImg"
            />
            <p className={styles.textNumber}>
              Years of <span>Experience</span>
            </p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonSecondary text="Learn More About Me" link="/about" />
        </div>
      </div>
    </section>
  );
}
