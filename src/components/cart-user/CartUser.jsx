import React from "react";
import cleaner from "../../../src/assets/png/vacuum-cleaner.png";
import trash from "../../../src/assets/png/remove.png";
import "./CartUser.css";

const CartUser = () => {
  return (
    <div className="container">
      <div className="cart-user">
        <p>Корзина</p>
      </div>
      <div className="border">
        <div className="first-cart">
          <div className="img-side">
            <img className="clean" src={cleaner} alt="vacuum cleaner" />
          </div>
          <div className="content-side">
            <span className="trash-icon">
              <img src={trash} alt="trash icon" />
            </span>
            <div className="information">
              <p className="name-goods">Пылесос</p>
              <p className="brand">ARTEL 05-EX2</p>
              <p className="currency">
                5000 <span className="country">KGZ</span>
              </p>
              <p className="shop">
                магазин: <span className="shop-name">Techno Dordoi</span>
              </p>
            </div>
            <div className="specifications">
              <p className="specification">Характеристики:</p>
              <p className="more">размер 3x4 45литр хорошо из китая</p>
            </div>
            <div className="order-button">Оформить товар</div>
          </div>
        </div>
      </div>
      <div className="border">
        <div className="first-cart">
          <div className="img-side">
            <img className="clean" src={cleaner} alt="vacuum cleaner" />
          </div>
          <div className="content-side">
            <span className="trash-icon">
              <img src={trash} alt="trash icon" />
            </span>
            <div className="information">
              <p className="name-goods">Пылесос</p>
              <p className="brand">ARTEL 05-EX2</p>
              <p className="currency">
                5000 <span className="country">KGZ</span>
              </p>
              <p className="shop">
                магазин: <span className="shop-name">Techno Dordoi</span>
              </p>
            </div>
            <div className="specifications">
              <p className="specification">Характеристики:</p>
              <p className="more">размер 3x4 45литр хорошо из китая</p>
            </div>
            <div className="order-button">Оформить товар</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUser;
