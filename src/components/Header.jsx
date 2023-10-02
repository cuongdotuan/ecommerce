import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    
      <div className=' text-7xl text-center pt-4  tracking-[25px]' >
        <NavLink  to={"/"}>
          <span className='text-center exo-2 uppercase'>bbw-store</span>
        </NavLink>
      </div>
    
  )
}

export default Header