/** @format */
import React from "react";
import "../footer/index.css";

export default function Subscribe() {
  return (
    <div className="subscribe section">
      <div className="subscribe__bg">
        <div className="subscribe__container container">
          <h2 className="section__title subscribe__title">Subscribe</h2>
          <p className="subscribe__description">
            Lorem ipsum dolor sit amet consectetur
          </p>

          <form action="" className="subscribe__form">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe__input"
            />

            <button className="button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}
