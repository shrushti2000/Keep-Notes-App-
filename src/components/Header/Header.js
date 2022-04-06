import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import './Header.css'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import { AuthContext } from '../../Context/AuthProvider'

const Header = () => {
  const { theme, ToggleMode } = useContext(ThemeContext)
  const { token, setToken } = useContext(AuthContext)

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear()
    setToken(undefined)
    navigate('/')
  }
  return (
    <div className={theme == "light" ? "navigation-container flex-hz" : "navigation-container-dark flex-hz"}>
      <div class="navigation-item-1">
        <h5 class="lib-name-1">Keep <span class="lib-name-2">App</span></h5>
      </div>
      <i class="fa fa-bars"></i>

      {token !== undefined ? <>
        <div class="navigation-item-3 flex-hz">
          <button class="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      </> : <>
        <div class="navigation-item-3 flex-hz">
          <Link to="/signin"><button class="btn btn-primary">Signin</button></Link>
          <Link to="/signup"><button class="btn btn-primary">Signup</button></Link>
          {theme === "light" ? <FontAwesomeIcon className='icons' icon={faMoon} onClick={ToggleMode}></FontAwesomeIcon> : <FontAwesomeIcon className='icons' icon={faSun} onClick={ToggleMode}></FontAwesomeIcon>}
        </div>
      </>}
    </div>
  )
}

export default Header