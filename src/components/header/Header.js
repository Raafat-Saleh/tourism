/** @format */
import React, { useState, useEffect, useRef } from "react";
import "./index.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  //Active section  in header
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  //Active section in header
  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    //set header when scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    });

    //Active section  in header
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`header ${scrollHeader ? "scroll-header" : ""}`}
    >
      {/* overlay */}
      <div
        className={`sidebar-wrapper ${showMenu ? "show" : ""}`}
        onClick={() => setShowMenu(false)}
      ></div>

      <nav className="nav container">
        <a href="#" className="nav__logo">
          Tourism
        </a>

        <div
          id="nav-menu"
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
        >
          <ul className="nav__list">
            <li
              className={`nav__items ${
                activeSection === "home" ? "active" : ""
              }`}
            >
              <a
                href="#home"
                className={`nav__link ${
                  activeSection === "home" ? "active-link" : {}
                }`}
                onClick={() => setShowMenu(false)}
              >
                Home
              </a>
            </li>
            <li
              className={`nav__items ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              <a
                href="#about"
                className={`nav__link ${
                  activeSection === "about" ? "active-link" : {}
                }`}
                onClick={() => setShowMenu(false)}
              >
                About
              </a>
            </li>
            <li
              className={`nav__items ${
                activeSection === "discover" ? "active" : ""
              }`}
            >
              <a
                href="#discover"
                className={`nav__link ${
                  activeSection === "discover" ? "active-link" : {}
                }`}
                onClick={() => setShowMenu(false)}
              >
                Discover
              </a>
            </li>
            <li
              className={`nav__items ${
                activeSection === "place" ? "active" : ""
              }`}
            >
              <a
                href="#place"
                className={`nav__link ${
                  activeSection === "place" ? "active-link" : {}
                }`}
                onClick={() => setShowMenu(false)}
              >
                Place
              </a>
            </li>
          </ul>

          <div className="nav__dark">
            <span className="change-theme-name">Dark mode</span>
            <i className="uil uil-moon change-theme" id="theme-button"></i>
          </div>

          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setShowMenu(true)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
