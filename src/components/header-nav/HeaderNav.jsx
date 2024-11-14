import React from 'react'
import './HeaderNav.css'

const HeaderNav = () => {
  return (
    <nav>
        <div className="container buttons-croup">
            <button>Главная</button>
            <button>Товары</button>
            <button>Контакты</button>
            <button>О нас</button>
            <button>Инструкция</button>
        </div>
    </nav>

  )
}

export default HeaderNav