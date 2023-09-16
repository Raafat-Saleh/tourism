/** @format */
import React from "react";
import "./index.css";
export default function Experience() {
  return (
    <div className="experience section" id="experience">
      <h2 className="section__title">
        With Our Experience <br /> We will help you
      </h2>
      <div className="experience__container container grid">
        <div className="experience__content grid">
          <div className="experience__data">
            <h2 className="experience__number">5</h2>
            <span className="experience__descrption">
              Lorem <br /> Consectetur
            </span>
          </div>

          <div className="experience__data">
            <h2 className="experience__number">55</h2>
            <span className="experience__descrption">
              Lorem <br />
              Amet
            </span>
          </div>

          <div className="experience__data">
            <h2 className="experience__number">95</h2>
            <span className="experience__descrption">
              Lorem <br />
              Ipsum
            </span>
          </div>
        </div>

        <div className="experience__img grid">
          <div className="experience__overlay">
            <img
              src="./Assets/Images/2.jpg"
              alt=""
              className="experience__img-one"
            />
          </div>
          <div className="experience__overlay">
            <img
              src="./Assets/Images/6.jpg"
              alt=""
              className="experience__img-two"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
