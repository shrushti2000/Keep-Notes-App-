import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div class="navigation-container flex-hz">
      <div class="navigation-item-1">
        <h5 class="lib-name-1">Keep <span class="lib-name-2">App</span></h5>
      </div>
      <i class="fa fa-bars"></i>

      <div class="navigation-item-3 flex-hz">
        <Link to="/signin"><button class="btn btn-primary">Login</button></Link>

      </div>
    </div>
  )
}

export default Header