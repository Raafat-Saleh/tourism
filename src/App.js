/** @format */
import React, { useEffect } from "react";
import scrollReveal from "scrollreveal";
import "./App.css";
import HomeMain from "./pages/home/Home";

function App() {
  useEffect(() => {
    scrollReveal().reveal(
      `.home__data, .home__social-link, .home__info, .discover__container, .experience__data, .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights`,
      {
        distance: "60px",
        duration: 2800,
        //k reset: true,
        // delay: 500,
        origin: "top",
        interval: 100,
      }
    );

    scrollReveal().reveal(
      `.about__data, .video__description, .subscribe__description`,
      {
        distance: "60px",
        duration: 2800,
        // reset: true,
        // delay: 500,
        origin: "left",
        interval: 100,
      }
    );

    scrollReveal().reveal(
      `.about__img-overlay, .video__content, .subscribe__form`,
      {
        distance: "60px",
        duration: 2800,
        origin: "right",
        interval: 100,
      }
    );
  }, []);

  return <HomeMain />;
}

export default App;
