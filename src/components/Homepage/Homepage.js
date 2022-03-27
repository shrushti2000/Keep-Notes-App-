import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import './Homepage.css'

const Homepage = () => {
  return (
    <>
      <div className="main-page-container">
      <Sidebar/>
      <div className='main-section-container'>
            <h1>Homepage</h1>
        </div>
      </div>
  
    </>
  )
}

export default Homepage