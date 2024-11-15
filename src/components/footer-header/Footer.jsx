import React from "react";
import "./Footer.css";
import logo from "../../../src/assets/png/rich.logo.png";
import facebook from '../../../src/assets/svg/Facebook.svg';
import instagram from '../../../src/assets/svg/Instagram.svg';
import inlogo from '../../../src/assets/svg/In.svg';
const Footer = () => {
  return (
    <div className="aback">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section company-info">
            <img src={logo} alt="Rich Technologies Logo" className="logo" />
            <p className="company-description">
              Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
              suscipit turpis enim cursus vulputate amet. Lobortis mi platea
              aliquam senectus tempus mauris neque.
            </p>
            <div className="social-icons">
              <img src={facebook} className="fab fa-facebook-f"></img>
              <img src={instagram} className="fab fa-instagram"></img>
              <img src={inlogo} className="fab fa-linkedin-in"></img>
            </div>
          </div>

          <div className="footer-section pages">
            <h4>Страницы</h4>
            <p>Главный</p>
            <p>Товары</p>
            <p>Контакт</p>
            <p>О нас</p>
          </div>

          <div className="footer-section contact">
            <h4>Контакт</h4>
            <p>arsenkerezbekov7@gmail.com</p>
            <p>+996755133166</p>
            <p>Бишкек, Кыргызстан</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Бишкек © 2024 стартап DORDOI STORE</p>
        </div>
      </footer>
    </div>
  );
};



export default Footer;
