import React from 'react'
import { useContext } from 'react'
import Note from '../../components/Note/Note'
import Sidebar from '../../components/Sidebar/Sidebar'
import { StateContext } from '../../Context/StateProvider'

const LabelFilter = () => {
  const {state,dispatch}=useContext(StateContext)
  const labels=[...state.labels]
  console.log(labels)
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className='homepage-container'>
          <h1>Notes according to Labels</h1>
          <div className='main-section-container flex-vt'>
         {labels.map(label=><>
         <h4>{label}</h4>
         <div className='displayNote-Container flex-hz flex-wrap'>
            {state.notes.map(note=>note.label===label && <Note noteItem={note}/>)}
            </div>
         </>)}
         
        </div>
        </div>
      </div>
    </>

  )
}

export default LabelFilter