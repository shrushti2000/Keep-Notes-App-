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
  const {token}=useContext(AuthContext)
  const {state,dispatch}=useContext(StateContext)
  console.log(state.notes)
  useEffect(() => {
    async function fetchData() {
      try{
        fetch("/api/notes", {
            method: "GET",
            
            headers: {
                authorization: token,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => dispatch({type:'SET_NOTES',payload:data.notes}))
            
       }catch(error){
           console.log(error)
       }
    };
    fetchData();
  }, [state.notes])
  return (
    <>
      <div className="main-page-container">
        <Sidebar />
        <div className='main-section-container flex-vt'>
          <TextEditor />
    <div className='displayNote-Container flex-hz flex-wrap'>
    {state.notes.map(noteItem=><Note noteItem={noteItem}/>)}
    </div>
        </div>
      </div>

    </>
  )
}

export default Homepage