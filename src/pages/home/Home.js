/** @format */

import React, { useEffect, useState } from "react";
import "./index.css";

import Header from "../../components/header/Header";
import Video from "../../components/video/Video";
import Discover from "../../components/discover/Discover";
import Footer from "../../components/footer/Footer";
import Subscribe from "../../components/subscribe/Subscribe";
import Place from "../../components/place/Place";
import Experience from "../../components/experience/Experience";
import About from "../../components/about/About";
import Home from "../../components/home/Home";

export default function HomeMain() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Discover />
        <Experience />
        <Video />
        <Place />
        <Subscribe />
      </main>
      <Footer />

      <a
        href="#"
        id="scroll-up"
        className={`scrollup ${showTopBtn ? "show-scroll" : ""}`}
      >
        <i
          className="uil uil-arrow-up scrollup__icon"
          onClick={() => goToTop()}
        ></i>
      </a>
    </div>
  );
}
