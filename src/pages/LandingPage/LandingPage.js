import React from 'react'
import './LandingPage.css'
import heroImg from '../../assets/hero-img.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import { useContext } from 'react'

const LandingPage = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div className={theme === "light" ? 'hero-section flex-hz jc-sa' : 'hero-section-dark flex-hz jc-sa'}>
        <img src={heroImg} className="hero-img" />
        <div className='hero-text-section'>
          <p class="hero-text-primary">Meet modern Note Taking app</p>
          <p class="hero-text-secondary">Manage your daily tasks and workflow in modern way and boost your efficiency without any efforts!</p>
          <Link className="links" to="/signin"> <button className='btn btn-primary'>Get Started</button></Link>
        </div>
      </div>
    </>
  )
}

export default LandingPage