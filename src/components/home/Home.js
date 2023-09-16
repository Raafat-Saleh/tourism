/** @format */
import React from "react";
import "./index.css";

export default function Home() {
  return (
    <div className="home" data-section id="home">
      <img src="./Assets/Images/1.jpg" alt="" className="home__img" />

      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__data-subtitle">Lorem ipsum dolor</span>
          <h1 className="home__data-title">
            Explore The <br /> Best Beautiful <br /> Beaches
            <br />
          </h1>
          <a href="#discover" className="button">
            Explore
          </a>
        </div>

        <div className="home__social">
          <a
            // href="https://www.facebook.com/"
            target="_blank"
            className="home__social-link"
          >
            <i className="uil uil-facebook"></i>
          </a>
          <a
            // href="https://www.instagram.com/"
            target="_blank"
            className="home__social-link"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            // href="https://twitter.com/"
            target="_blank"
            className="home__social-link"
          >
            <i className="uil uil-twitter"></i>
          </a>
        </div>
        <div className="home__info">
          <div>
            <span className="home__info-title"> The best beaches to visit</span>
            <a
              href="#place"
              className="button button--flex button--link home__info-button"
            >
              More <i className="uil uil-arrow-right"></i>
            </a>
          </div>

          <div className="home__info-overlay">
            <img
              src="./Assets/Images/2.jpg"
              alt=""
              className="home__info-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
