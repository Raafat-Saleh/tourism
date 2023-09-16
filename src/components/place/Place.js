/** @format */
import React from "react";
import "./index.css";

export default function Place() {
  return (
    <div className="place section" data-section id="place">
      <h2 className="section__title">Choose Place</h2>
      <div className="place__container container grid">
        <div className="place__card">
          <img src="./Assets/Images/5.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="uil uil-star place__rating-icon"></i>
            </span>
            <div className="place__data">
              <h3 className="place__title">Lorem </h3>
              <span className="place__price">2200</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="uil uil-arrow-right"></i>
          </button>
        </div>

        <div className="place__card">
          <img src="./Assets/Images/6.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="uil uil-star place__rating-icon"></i>
            </span>
            <div className="place__data">
              <h3 className="place__title">Lorem </h3>
              <span className="place__price">1100</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="uil uil-arrow-right"></i>
          </button>
        </div>

        <div className="place__card">
          <img src="./Assets/Images/7.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="uil uil-star place__rating-icon"></i>
            </span>
            <div className="place__data">
              <h3 className="place__title"> Lorem </h3>
              <span className="place__price">1200</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="uil uil-arrow-right"></i>
          </button>
        </div>

        <div className="place__card">
          <img src="./Assets/Images/6.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="uil uil-star place__rating-icon"></i>
            </span>
            <div className="place__data">
              <h3 className="place__title">Lorem </h3>
              <span className="place__price">1100</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="uil uil-arrow-right"></i>
          </button>
        </div>

        <div className="place__card">
          <img src="./Assets/Images/5.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="uil uil-star place__rating-icon"></i>
            </span>
            <div className="place__data">
              <h3 className="place__title">Lorem </h3>
              <span className="place__price">2200</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="uil uil-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
