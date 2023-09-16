/** @format */
import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer className="footer section foot">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <div className="footer__data">
            <h3 className="footer__title">Tourism</h3>
            <p className="footer__description">
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit.
            </p>

            <div>
              <a
                // href="https://www.facebook.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-facebook-f"></i>
              </a>
              <a
                // href="https://www.instagram.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-instagram-alt"></i>
              </a>
              <a
                // href="https://twitter.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer__data">
            <h3 className="footer__subtitle">About</h3>
            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__data">
            <h3 className="footer__subtitle">Company</h3>
            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Plan & Pricing
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__data">
            <h3 className="footer__subtitle">Support</h3>
            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms & Agreements
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
