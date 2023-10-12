import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const Navigation = () => {
  const { cart } = useContext(CartContext)
  return (
    <nav className='flex justify-center gap-8 pt-3 pb-1 text-xl '>
      <NavLink className='' to={"/"}>???</NavLink>
      <NavLink className='' to={"products"}>Products</NavLink>
      <NavLink className='' to={"about"}>About</NavLink>
      <NavLink className='' to={"cart"}>Cart ({cart.length})</NavLink>

    </nav>
  )
}

export default Navigation