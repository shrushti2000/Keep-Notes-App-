import { faThermometer } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { StateContext } from '../../Context/StateProvider'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import { getfilteredData } from '../../reducerFunction'
import Modal from '../Modal/Modal'
import Note from '../Note/Note'
import Sidebar from '../Sidebar/Sidebar'
import TextEditor from '../TextEditor/TextEditor'

import './Homepage.css'

const Homepage = () => {
  const { token } = useContext(AuthContext)
  const {theme}= useContext(ThemeContext)
  const { state, dispatch } = useContext(StateContext)
const filteredData=getfilteredData(state,state.notes)
console.log(filteredData)
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className={theme==="light"? 'main-section-container flex-vt':'main-section-container-dark flex-vt'}>
          {state.showTextEditor && <TextEditor />}
          <h5>Pinned</h5>
          <div className='displayNote-Container flex-hz flex-wrap'>
            {filteredData.map(note => note.isPinned && <Note noteItem={note} />)}
          </div>
          <h5>Others</h5>
          <div className='displayNote-Container flex-hz flex-wrap'>
            {filteredData.map(note => !note.isPinned && <Note noteItem={note} />)}
          </div>
        </div>
        {state.showModal && <Modal />}
      </div>

    </>
  )
}

export default Homepage