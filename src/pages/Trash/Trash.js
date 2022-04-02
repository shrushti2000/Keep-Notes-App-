import React from 'react'
import { useContext } from 'react'
import Note from '../../components/Note/Note'
import Sidebar from '../../components/Sidebar/Sidebar'
import { StateContext } from '../../Context/StateProvider'

const Trash = () => {
  const {state,dispatch}=useContext(StateContext)
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className='homepage-container'>
          <h1>Trashed Notes</h1>
          <div className='main-section-container flex-vt'>
         
          <div className='displayNote-Container flex-hz flex-wrap'>
            {state.trashedNotes.map(noteItem => <Note noteItem={noteItem} />)}
          </div>
        </div>
        </div>
      </div>
    </>

  )
}

export default Trash