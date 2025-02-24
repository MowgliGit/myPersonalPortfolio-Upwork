import Navigation from "./Navigation";
import styles from "../styles/Services.module.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";
import ButtonSection from "./ButtonSection";
const servicesItems = [
  {
    icon: "icons8-responsive-design-50.png",
    title: "Responsive Design",
    text: "I create visually appealing websites that adapt seamlessly to various screen sizes.",
  },
  {
    icon: "icons8-web-design-50.png",
    title: "Web Design",
    text: "Creating stunning, modern, and user-friendly websites.",
  },
  {
    icon: "icons8-git-50.png",
    title: "Version Control & Git",
    text: "Using Git for version control and collaboration within development teams.",
  },
  {
    icon: "/icons8-identity-50.png",
    title: "Brand Identity",
    text: "Crafting brand identities that make your business stand out.",
  },
  {
    icon: "icons8-bursts-50.png",
    title: "Organized UI Layers",
    text: "Designing organized layers that enhance the user experience.",
  },
  {
    icon: "icons8-layout-50.png",
    title: "Multi-Page Website",
    text: "Premium-quality, clean, and modern designs.",
  },
  {
    icon: "icons8-google-code-50.png",
    title: "Front-end Development",
    text: "I use HTML, CSS, and JavaScript to build interactive websites.",
  },
  {
    icon: "icons8-seo-50.png",
    title: "SEO Strategy",
    text: "I optimize websites to improve rankings, driving more traffic and increasing visibility.",
  },
  {
    icon: "icons8-imac-settings-50.png",
    title: "JavaScript Development",
    text: "Utilizing modern frameworks like React to ensure high performance.",
  },
];

const Services = () => {
  return (
    <>
      <section className={`${styles.sectionServices} `}>
        <Navigation />
        <div className={styles.containerService}>
          <div className={styles.subHeading}>
            <h6>Services</h6>
            <span className={styles.line}></span>
          </div>
          <div>
            <h2 className={styles.headingSecondary}>What You’ll Get</h2>
          </div>
          <div className="btnCentre">
            <ButtonSection text="View Services" link="#sectionServicesPlan" />
          </div>
        </div>
      </section>
      <section className={styles.sectionServicesBox} id="sectionServicesPlan">
        <div className={styles.containerServiceBox}>
          <div className={styles.servicesBoxPlan}>
            <h3 className={styles.headingTertiary}>
              How I Can Help with Your Next Project
            </h3>
            <p className={styles.servicesParagraph}>
              Everything you need for a seamless and professional design
              experience.
            </p>
          </div>
          <div className={`${styles.servicesBoxItems}`}>
            {servicesItems.map((service, index) => (
              <div className={styles.iconItemService} key={index}>
                <div className={styles.iconBoxService}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${service.icon}`}
                    alt={service.title}
                    className={styles.iconImgService}
                  />
                </div>
                <h6 className={styles.serviceTitleItem}>{service.title}</h6>
                <p className={styles.serviceParagraphItem}>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
