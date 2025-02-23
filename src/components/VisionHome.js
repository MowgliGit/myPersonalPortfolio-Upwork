import ButtonPrimary from "./ButtonPrimary";
import styles from "../styles/Home.module.css";
import "../App.css";
export default function VisionHome() {
  return (
    <>
      <section className={`section ${styles.sectionVisionHome}`}>
        <div className={` ${styles.containerVisionHome}`}>
          <h1 className={styles.headingPrimary}>
            Got a Vision? Let’s Bring It to Life
          </h1>

          <ButtonPrimary text="Pricing & Offers" link="/Prices " />
        </div>
      </section>
    </>
  );
}
