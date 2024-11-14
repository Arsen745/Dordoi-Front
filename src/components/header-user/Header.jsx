import React from 'react'
import './Header.css'
import Logo from '../../assets/png/logo.png'
import { Select, Space } from 'antd';
import search from '../../assets/svg/Seacrh.svg'
import heart from '../../assets/svg/Heart.svg'
import cart from '../../assets/svg/Cart.svg'




const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Header = () => {
  return (
    <div className='header-container'>
      <div className="container content-header">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="seacrh">
          <div className="filter">
            <select id="">
              <option value="name">Фильтр</option>
              <option value="name">Арсен</option>
              <option value="name">Аблай</option>
            </select>
          </div>
          <div className="input">
            <input type="text" placeholder='Искать товар' />
            <button>Искать<img src={search} alt="" /></button>
          </div>
        </div>
        <div className="nav-header">
          <button><img src={heart} alt="" /><p>10</p></button>
          <button><img src={cart} alt="" /><p>10</p></button>
          <button className='button-ui'>Создать Магазин</button>
          <button className='button-ui'>Заказы</button>
        </div>
      </div>
    </div>
  )
}

export default Header