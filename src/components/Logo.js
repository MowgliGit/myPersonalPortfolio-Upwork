import React, { useEffect, useRef } from "react";
import styles from "../styles/Logo.module.css";
import ButtonPrimary from "./ButtonPrimary";
import "../App.css";
const logoImages = [
  { image: "htmlLogo.png" },
  { image: "logoCss.png" },
  { image: "logoBootstrap.png" },
  { image: "logoJS.png" },
  { image: "logoReact.png" },
  { image: "logoWebDesign.png" },
  { image: "logoGitHub.png" },
];

export default function Logo() {
  const sliderRef = useRef(null);
  const slideInterval = useRef(null);

  useEffect(() => {
    let position = 0;

    // Clone the images to create a seamless loop
    const totalImages = logoImages.length;
    const totalClones = totalImages * 2;
    const slideWidth = 120; // Adjust this for better spacing

    slideInterval.current = setInterval(() => {
      position -= slideWidth;

      // Reset to the beginning when the end is reached
      if (Math.abs(position) >= slideWidth * totalImages) {
        position = 0;
        sliderRef.current.style.transition = "none"; // Disable animation for seamless loop
        sliderRef.current.style.transform = `translateX(${position}px)`;
      } else {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        sliderRef.current.style.transform = `translateX(${position}px)`;
      }
    }, 2000);

    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderLogo} ref={sliderRef}>
          {[...logoImages, ...logoImages].map((logo, index) => (
            <div className={styles.logoItem} key={index}>
              <img
                className={styles.logoImg}
                src={`${process.env.PUBLIC_URL}/images/${logo.image}`}
                alt={logo.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sectionCV}>
        <ButtonPrimary
          text="View my CV"
          link="https://mowgligit.github.io/CV-with-bootstrap/"
        />
      </div>
    </>
  );
}
