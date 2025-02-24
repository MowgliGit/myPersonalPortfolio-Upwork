import Navigation from "./Navigation";
import HeaderPrimaryAnimation from "./HeadingPrimaryAnimation";
import styles from "../styles/HeadingPrimaryAnimation.module.css";
import "../App.css";
import "ionicons";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={`${styles.header} `}>
      <Navigation />
      <HeaderPrimaryAnimation />
    </header>
  );
}
