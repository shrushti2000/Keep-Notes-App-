import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { StateContext } from '../../Context/StateProvider'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import { getfilteredData } from '../../reducerFunction'
import Modal from '../Modal/Modal'
import Note from '../Note/Note'
import Sidebar from '../Sidebar/Sidebar'
import TextEditor from '../TextEditor/TextEditor'
import heroImg2 from '../../assets/Notebook-pana.png'

import './Homepage.css'

const Homepage = () => {
  const { token } = useContext(AuthContext)
  const { theme } = useContext(ThemeContext)
  const { state, dispatch } = useContext(StateContext)
  const getSortedNotes=(notes,sortByTime)=>{
    if(sortByTime===true){
      return [...notes].sort(function(a,b){
        return new Date(b['time']) - new Date(a['time']);
      })
    }else{
      return notes
    }
    
  }
  const sortedData=getSortedNotes(state.notes,state.sortByTime)
  const filteredData = getfilteredData(state, sortedData)
  console.log(filteredData)
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className={theme === "light" ? 'main-section-container flex-vt' : 'main-section-container-dark flex-vt'}>
          {state.showTextEditor && <TextEditor />}
          {state.notes.length === 0 && state.showTextEditor === false ? <>
            <p className='text-md'>You have not created notes uptil now. Get started now by simply clicking on Add a note! </p>
            <img src={heroImg2} className="hero-img" />
          </> : <> <h5>Pinned</h5>
            <div className='displayNote-Container flex-hz flex-wrap'>
              {filteredData.map(note => note.isPinned && <Note noteItem={note} />)}
            </div>
            <h5>Others</h5>
            <div className='displayNote-Container flex-hz flex-wrap'>
              {filteredData.map(note => !note.isPinned && <Note noteItem={note} />)}
            </div></>}
        </div>
        {state.showModal && <Modal />}
      </div>

    </>
  )
}

export default Homepage