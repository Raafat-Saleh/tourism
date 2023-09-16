/** @format */
import React from "react";
import "./index.css";

export default function About() {
  return (
    <div className="about section" data-section id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            About The Best <br /> Beautiful Beaches
          </h2>
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            <br />
            <br />
            Non tincidunt magna non et elit. Dolturpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <a href="#place" className="button">
            Choose a Place
          </a>
        </div>

        <div className="about__img">
          <div className="about__img-overlay">
            <img
              src="./Assets/Images/7.jpg"
              alt=""
              className="about__img-one"
            />
          </div>
          <div className="about__img-overlay">
            <img
              src="./Assets/Images/6.jpg"
              alt=""
              className="about__img-two"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
