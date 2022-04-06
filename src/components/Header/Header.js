import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import './Header.css'
import  { ThemeContext } from '../../Context/ThemeContextProvider'

const Header = () => {
  const {theme,ToggleMode}=useContext(ThemeContext)
  return (
    <div className={theme=="light"?"navigation-container flex-hz":"navigation-container-dark flex-hz"}>
      <div class="navigation-item-1">
        <h5 class="lib-name-1">Keep <span class="lib-name-2">App</span></h5>
      </div>
      <i class="fa fa-bars"></i>

      <div class="navigation-item-3 flex-hz">
        <Link to="/signin"><button class="btn btn-primary">Login</button></Link>
       {theme==="light"? <FontAwesomeIcon className='icons' icon={faMoon} onClick={ToggleMode}></FontAwesomeIcon>: <FontAwesomeIcon className='icons' icon={faSun} onClick={ToggleMode}></FontAwesomeIcon>}

      </div>
    </div>
  )
}

export default Header