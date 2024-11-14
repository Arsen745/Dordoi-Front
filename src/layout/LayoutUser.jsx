import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header-user/Header'
import Footer from '../components/footer-header/Footer'
import HeaderNav from '../components/header-nav/HeaderNav'

const LayoutUser = () => {
  return (
    <div>
      <Header />
      <HeaderNav/>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default LayoutUser