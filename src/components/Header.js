import Navigation from "./Navigation";
import HeaderPrimaryAnimation from "./HeadingPrimaryAnimation";
import styles from "../styles/HeadingPrimaryAnimation.module.css";
import "../App.css";
import "ionicons";

export default function Header() {
  return (
    <header className={`${styles.header} `}>
      <Navigation />
      <HeaderPrimaryAnimation />
    </header>
  );
}
