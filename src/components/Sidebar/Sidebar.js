import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar-container flex-vt'>
      
        <Link className='links' to="/homepage"><h4 className='sidebar-item'>Home</h4></Link>
        <Link className='links' to='/trash'><h4 className='sidebar-item'>Trash</h4></Link>
        <Link className='links' to="/archive"><h4 className='sidebar-item'>Archive</h4></Link>
    </div>
    </>
  )
}

export default Sidebar