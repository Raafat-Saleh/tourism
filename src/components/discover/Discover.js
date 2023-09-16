/** @format */
import React from "react";
import "./index.css";

import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function Discover() {
  return (
    <div className="discover section" data-section id="discover">
      <h2 className="section__title discover">
        Discover the best <br /> Beautiful Beaches
      </h2>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={32}
        loop={true}
        autoplay={{
          reverseDirection: true,
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="discover__container container swiper mySwiper"
      >
        <SwiperSlide className="discover__card swiper-slide">
          <img src="Assets/Images/5.jpg" alt="" className="discover__img" />
          <div className="discover__data">
            <h2 className="discover__title">Lorem </h2>
            <span className="discover__description">Lorem ipsum dolor</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="discover__card swiper-slide">
          <img src="Assets/Images/6.jpg" alt="" className="discover__img" />
          <div className="discover__data">
            <h2 className="discover__title">Lorem </h2>
            <span className="discover__description">Lorem ipsum dolor</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="discover__card swiper-slide">
          <img src="Assets/Images/5.jpg" alt="" className="discover__img" />
          <div className="discover__data">
            <h2 className="discover__title">Lorem </h2>
            <span className="discover__description">Lorem ipsum dolor</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="discover__card swiper-slide">
          <img src="Assets/Images/7.jpg" alt="" className="discover__img" />
          <div className="discover__data">
            <h2 className="discover__title">Lorem </h2>
            <span className="discover__description">Lorem ipsum dolor</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
