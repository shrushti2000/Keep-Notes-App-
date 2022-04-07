import React from 'react'
import { useContext } from 'react'
import Note from '../../components/Note/Note'
import Sidebar from '../../components/Sidebar/Sidebar'
import { StateContext } from '../../Context/StateProvider'
import { ThemeContext } from '../../Context/ThemeContextProvider'

const LabelFilter = () => {
  const { state } = useContext(StateContext)
  const { theme } = useContext(ThemeContext)
  const labels = [...state.labels]
  console.log(labels)
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className={theme === "light" ? 'homepage-container' : 'homepage-container-dark'}>
          <h3 className={theme === "light" ? 'title-light' : 'title-dark'}>notes according to labels</h3>
          <div className='main-section-container flex-vt'>
            {labels.map(label => <>
              <h4>{label}</h4>
              <div className='displayNote-Container flex-hz flex-wrap'>
                {state.notes.map(note => note.label === label && <Note noteItem={note} />)}
              </div>
            </>)}

          </div>
        </div>
      </div>
    </>

  )
}

export default LabelFilter