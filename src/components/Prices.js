import Navigation from "./Navigation";
import styles from "../styles/Prices.module.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../App.css";
import ButtonSection from "./ButtonSection";

// Pricing data
const pricingData = [
  {
    id: 1,
    title: "Basic Website Plan",
    subtitle: "Comprehensive UI/UX Design",
    titlePrice: "Price",
    price: "$150 - $300",
    includes: [
      "One-page website",
      "Landing Pages",
      "Responsive design",
      "Basic SEO optimization",
      "Layout structuring",
      "1 round of revisions",
    ],
  },
  {
    id: 2,
    title: "Standard Website Plan",
    subtitle: "Front-End Development",
    titlePrice: "Price",
    price: "$300 - $700",
    includes: [
      "Multi-page website",
      "Responsive design",
      "SEO optimization",
      "2 rounds of revisions",
      "HTML/CSS/JS Dev",
      "CSS/JS animations",
      "Social media integration",
    ],
  },
  {
    id: 3,
    title: "Premium Website Plan",
    subtitle: "Illustration & Development",
    titlePrice: "Price",
    price: "$700 - $900",
    includes: [
      "Multi-page website",
      "Responsive design",
      "Advanced SEO opt.",
      "3 rounds of revisions",
      "Custom Illustration Set",
      "CSS/JS animations",
      "React & JS for dynamic sites",
    ],
  },
];

const PricingCard = ({
  title,
  titlePrice,
  subtitle,
  includes,
  price,
  styles,
  isFront,
  index,
}) => {
  // Define background styles based on the index (or title)
  const backgroundStyle = (() => {
    if (index === 0) {
      return styles.cardHeadindBoxFirst; // First card background
    } else if (index === 1) {
      return styles.cardHeadindBoxSecond; // Second card background
    } else {
      return styles.cardHeadindBoxThird; // Third card background
    }
  })();

  return (
    <div className={styles.pricingCard}>
      <div
        className={`${styles.pricingCardSide} ${styles.pricingCardSideFront} ${
          isFront
            ? styles.pricingCardSideFrontFirst
            : styles.pricingCardSideFrontSecond
        }`}
      >
        <div className={`${backgroundStyle} ${styles.pricingCardTitleBox}`}>
          <h4 className={styles.headingQuaternary}>{title}</h4>
          <h5 className={styles.headingQuinary}>{subtitle}</h5>
        </div>
        <div className={styles.cardDetails}>
          <ul className={styles.cardList}>
            {includes.map((item, index) => (
              <div className={styles.cardItem} key={index}>
                <span>
                  <ion-icon
                    name="checkmark-done-outline"
                    className={styles.icon}
                  ></ion-icon>
                </span>
                <li className={styles.cardListItem}>{item}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${styles.pricingCardSide} ${styles.pricingCardSideBack}`}
      >
        <div className={styles.priceWrapper}>
          <p className={styles.titlePrice}>{titlePrice}</p>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </div>
  );
};
// Ensure Prices is exported as the default export
const Prices = ({ isMenuVisible, toggleMenu }) => {
  return (
    <>
      <section className={`${styles.sectionPrices} `}>
        <Navigation />
        <div className={styles.containerPrices}>
          <div className={styles.subHeading}>
            <h6>Prices</h6>
            <span className={styles.line}></span>
          </div>
          <div>
            <h2 className={styles.headingSecondary}>
              Find the Perfect Plan for Your Needs
            </h2>
          </div>
          <div className="btnCentre">
            <ButtonSection
              text="View Pricing Plans"
              link="#sectionPricingBox"
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionPricingBox} id="sectionPricingBox">
        <div className={styles.containerPricing}>
          <h3 className={`mb ${styles.headingTertiary}`}>
            Find the Plan That Fits You Best
          </h3>
          <div className={`${styles.pricingCardBoxGrid}`}>
            {pricingData.map((plan, index) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                titlePrice={plan.titlePrice}
                subtitle={plan.subtitle}
                price={plan.price} // Pass the price to the card
                includes={plan.includes}
                styles={styles}
                isFront={index === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Prices;
