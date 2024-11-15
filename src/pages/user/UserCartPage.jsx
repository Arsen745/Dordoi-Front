import React from 'react'
import { Outlet } from 'react-router-dom'
import CartUser from '../../components/cart-user/CartUser'

const UserCartPage = () => {
  return (
    <div>
        <CartUser/>
        <Outlet/>
    </div>
  )
}

export default UserCartPage