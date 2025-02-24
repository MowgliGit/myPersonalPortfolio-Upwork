import React, { useState } from "react";
import Header from "./Header";
import AboutHome from "./AboutHome";
import ServicesHome from "./ServicesHome";
import ProjectsHome from "./ProjectsHome";
import VisionHome from "./VisionHome";
import TestimonialsHome from "./TestimonialsHome";
import Footer from "./Footer";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <>
      <Header isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <AboutHome isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <ServicesHome />
      <ProjectsHome />
      <VisionHome />
      <TestimonialsHome />
      <Footer />
    </>
  );
}
