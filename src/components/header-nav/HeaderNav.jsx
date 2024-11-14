import React from 'react'
import './HeaderNav.css'
import { useNavigate } from 'react-router-dom'

const HeaderNav = () => {
  const navigate = useNavigate()
  return (
    <nav>
        <div className="container buttons-croup">
            <button onClick={() => {
              navigate('/')
            }}>Главная</button>
            <button onClick={() => {
              navigate('/product')
            }}>Товары</button>
            <button>Контакты</button>
            <button>О нас</button>
            <button>Инструкция</button>
        </div>
    </nav>

  )
}

export default HeaderNav