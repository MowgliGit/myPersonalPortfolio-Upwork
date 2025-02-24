import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { certificateOutline } from "ionicons/icons";
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
      date: "12/2021 - 02/2022", // Standardized date format
      certificateUrl: "creative.png",
    },
    {
      index: "01",
      name: "Front-End Web Development Course",
      academy: "Javen Advertising",
      date: "02/2022 - 05/2022", // Standardized date format
      certificateUrl: "javen.png",
    },
    {
      index: "02",
      name: "Self-Taught JavaScript Developer",
      academy: "Udemy",
      date: "05/2022 - 03/2023", // Standardized date format
      certificateUrl: "javascript.jpg",
    },
    {
      index: "03",
      name: "Front-End Programming with JS and React",
      academy: "SMX Academy",
      date: "04/2024 - 05/2024", // Standardized date format
      certificateUrl: "react.png", // Corrected path
    },
  ];

  const experienceItems = [
    {
      index: "00",
      name: "HTML & CSS Developer",
      description:
        "Created responsive, well-structured web pages using HTML and CSS, ensuring clean layouts and an optimal viewing experience across all devices.",
    },
    {
      index: "01",
      name: "Jr. JavaScript Developer",
      description:
        "Added interactivity to websites using JavaScript, including animations, user event handling, and enhancing functionality.",
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
                <IonIcon icon={certificateOutline} className={styles.icon} />
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
