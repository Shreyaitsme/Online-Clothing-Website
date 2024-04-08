import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
         <a href="#">Logo</a>
         <nav>
          <ul>
          <li>
              <NavLink to ="/productpage">ProductPage</NavLink>
          </li>
          <li>
              <NavLink to ="/cart">Cart</NavLink>
          </li> 
          <li>   
              <NavLink to ="/login">Login</NavLink>
          </li> 
          <li>   
              <NavLink to ="/verifyotp">VerifyOtp</NavLink>
          </li> 

          </ul>   
         </nav>
      </header>
    </div>
  )
}

export default Header