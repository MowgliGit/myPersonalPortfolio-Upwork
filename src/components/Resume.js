import { useState } from "react";
import { IonIcon } from "@ionic/react";

import styles from "../styles/Resume.module.css";
import { Link } from "react-router-dom";
import "../App.css";
export default function Resume() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const educationItems = [
    {
      index: "00",
      name: "Introduction to Web Development",
      academy: "Creative Hub",
      date: "12/2021 - 12/2021",
      certificateUrl: "creative.png",
    },
    {
      index: "01",
      name: "Responsive Web Design Course – HTML&CSS",
      academy: "Udemy",
      date: "01/2021 - 05/2022",
      certificateUrl: "html&css.jpg",
    },
    {
      index: "02",
      name: "Bootstrap 5 Course – From Scratch with Projects",
      academy: "Udemy",
      date: "05/2022 - 06/2022",
      certificateUrl: "html&css.jpg",
    },
    {
      index: "03",
      name: "Self-Taught JavaScript Developer",
      academy: "Udemy",
      date: "09/2022 - 03/2023",
      certificateUrl: "javascript.jpg",
    },
    {
      index: "04",
      name: "Front-End Programming with JS and React",
      academy: "SMX Academy",
      date: "04/2024 - 05/2024",
      certificateUrl: "react.png",
    },
  ];

  const experienceItems = [
    {
      index: "00",
      name: "HTML & CSS Developer",
      description:
        "As an HTML & CSS Developer with expertise in Bootstrap, I create fully responsive, well-structured, and visually appealing web pages. My focus is on delivering clean layouts and seamless user experiences across all devices.",
    },
    {
      index: "01",
      name: "Jr. JavaScript Developer",
      description:
        "Added interactivity to websites using JavaScript, including animations, user event handling, and enhanced functionality to improve user experience and site performance. Also collaborated with design teams to implement seamless, interactive features that align with the overall user interface.",
    },
    {
      index: "02",
      name: "Jr. Full-Stack Developer with JavaScript and React",
      description:
        "Built interactive, dynamic web pages using React, focusing on creating reusable components and managing state for a smooth user experience.",
    },
  ];

  const handleCertificateClick = (certificateUrl) => {
    setSelectedCertificate(certificateUrl);
  };

  return (
    <div className="grid grid-2-cols">
      <div className={styles.educationBox}>
        <h3 className={`${styles.headingQuarternary} pl`}>My Education</h3>
        <ul className={`${styles.navList} ${styles.vLine}`}>
          {educationItems.map((item) => (
            <li key={item.index} className={styles.navLink}>
              <strong className={styles.title}>{item.name}</strong>
              <br />
              <span
                className={`${styles.academy} clickable`}
                onClick={() => handleCertificateClick(item.certificateUrl)}
              >
                {item.academy}
              </span>
              <br />
              <span className={styles.date}>{item.date}</span>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.experienceBox}>
        <h3 className={`${styles.headingQuarternary} pl`}>My Experience</h3>
        <ul className={`${styles.navList} ${styles.vLine}`}>
          {experienceItems.map((item) => (
            <li key={item.index} className={styles.navLink}>
              <strong className={styles.title}>{item.name}</strong>
              <br />
              <span className={styles.description}>{item.description}</span>
              <hr />
            </li>
          ))}
        </ul>
      </div>

      {selectedCertificate && (
        <div className={styles.certificateModal}>
          <div className={styles.certificateContent}>
            <button
              onClick={() => setSelectedCertificate(null)}
              className={styles.closeButton}
            >
              <ion-icon
                name="close-outline"
                className={styles.closeButton}
              ></ion-icon>
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/images/${selectedCertificate}`}
              alt="Certificate"
              className={styles.certificateImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
