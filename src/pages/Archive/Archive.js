import React from 'react'
import { useContext } from 'react'
import Note from '../../components/Note/Note'
import Sidebar from '../../components/Sidebar/Sidebar'
import { StateContext } from '../../Context/StateProvider'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import './Archive.css'

const Archive = () => {
  const { state } = useContext(StateContext)
  const {theme}=useContext(ThemeContext)
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className={theme==="light" ? 'homepage-container':'homepage-container-dark'}>
        <h1 className={theme==="light" ? 'title-light':'title-dark'}>Archived Notes</h1>
          <div className='main-section-container flex-vt'>

            <div className='displayNote-Container flex-hz flex-wrap'>
              {state.archivedNotes.map(noteItem => <Note noteItem={noteItem} />)}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Archive