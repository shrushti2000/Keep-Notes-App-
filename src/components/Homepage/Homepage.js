import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import Note from '../Note/Note'
import Sidebar from '../Sidebar/Sidebar'
import TextEditor from '../TextEditor/TextEditor'

import './Homepage.css'

const Homepage = () => {
  const {token}=useContext(AuthContext)
 
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className='main-section-container flex-vt'>
          <TextEditor />
        <Note/>
        </div>
      </div>

    </>
  )
}

export default Homepage