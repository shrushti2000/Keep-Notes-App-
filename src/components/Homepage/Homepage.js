import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { StateContext } from '../../Context/StateProvider'
import Note from '../Note/Note'
import Sidebar from '../Sidebar/Sidebar'
import TextEditor from '../TextEditor/TextEditor'

import './Homepage.css'

const Homepage = () => {
  const { token } = useContext(AuthContext)
  const { state, dispatch } = useContext(StateContext)

 
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className='main-section-container flex-vt'>
          {state.showTextEditor && <TextEditor />}
          <div className='displayNote-Container flex-hz flex-wrap'>
            {state.notes.map(noteItem => <Note noteItem={noteItem} />)}
          </div>
        </div>
      </div>

    </>
  )
}

export default Homepage