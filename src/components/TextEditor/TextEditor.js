import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faPalette} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faBoxArchive} from '@fortawesome/free-solid-svg-icons'
import {faThumbTack} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './TextEditor.css'
import { useState } from 'react'
import { StateContext } from '../../Context/StateProvider'
import ColorPicker from '../ColorPicker/ColorPicker'
import { useContext } from 'react'
import { useReducer } from 'react'
import  { AuthContext } from '../../Context/AuthProvider'
import reducerFunction from '../../reducerFunction'

const TextEditor = () => {
  const {state,dispatch}=useContext(StateContext)
  const { token}=useContext(AuthContext)
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('')
  const [color,setColor]=useState('')
  const [isPinned,setIsPinned]=useState(false)
  const [label,setLabel]=useState('')

  const noteObj={
    title,desc,color,isPinned,label
  }
 
  
  
  const submitHandler=()=>{
   
      fetch("/api/notes", {
     
        // Adding method type
        method: "POST",
     
        body: JSON.stringify({note:noteObj}),
         
        // Adding headers to the request
        headers: {
            "authorization":token,
            "Content-type": "application/json; charset=UTF-8"
        }
    })  // Converting to JSON
    .then(response => response.json())
     
    // Displaying results to console
    .then(json => console.log(json));
    
  }
  console.log(state.showColorPalette)
  return (
    <>
        <div className='textEditor-container flex-vt'>
        <FontAwesomeIcon className="icons pin-icon" icon={faThumbTack} onClick={(e)=>setIsPinned(!isPinned)} ></FontAwesomeIcon>
            <input type="text" placeholder='title' className='note-title' onChange={(e)=>setTitle(e.target.value)}/>
            <textarea className='note-desc' placeholder='enter note...' onChange={(e)=>setDesc(e.target.value)}></textarea>
            <div className='textEditor-footer flex-hz jc-sb'>
             
          
         <div> <select value={label} className="labelInput" onChange={(e)=>setLabel(e.target.value)}>
        {state.labels.map(opt=>{
          return  <option value={opt} >{opt}</option>
        })}
         </select></div>
         
         <div className='flex-hz'>
         <FontAwesomeIcon  icon={faPalette} className="icons colorpalette-icon" onClick={(e)=>dispatch({type:"SHOW_COLOR_PALETTE",payload:!state.showColorPalette})} ></FontAwesomeIcon>
           {state.showColorPalette && <ColorPicker setColor={setColor}/>}
            <FontAwesomeIcon className='icons' icon={faBoxArchive} ></FontAwesomeIcon>
       
           <p className='text-md icons' onClick={submitHandler}>Save</p>
         </div>
           
           
            
           
        </div>
        </div>
    </>
  )
}

export default TextEditor