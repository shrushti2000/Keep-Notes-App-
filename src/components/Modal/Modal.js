import { faBoxArchive, faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { StateContext } from '../../Context/StateProvider'
import ColorPicker from '../ColorPicker/ColorPicker'
import './Modal.css'
const Modal = () => {
    const {state,dispatch}=useContext(StateContext)
    const {token}=useContext(AuthContext)
    const [newtitle,setNewTitle]=useState(state.noteToBeChanged.title)
    const [newDesc,setNewDesc]=useState(state.noteToBeChanged.desc)
    const [newLabel,setNewLabel]=useState(state.noteToBeChanged.label)
    const [newColor,setNewColor]=useState(state.noteToBeChanged.color)
    const newNote={
        ...state.noteToBeChanged,
        title:newtitle,
        desc:newDesc,
        label:newLabel,
        color:newColor
    }

    const saveNewNote = () => {
        fetch(`/api/notes/${state.noteToBeChanged._id}`, {
          method: "POST",
          body: JSON.stringify({ note: newNote }),
          headers: {
            "authorization": token,
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(res=>res.json())
        .then(data=> dispatch({type:'SET_NOTES',payload:data.notes}),dispatch({type:'OPEN_MODAL',payload:!state.showModal}))
       }
  return (
    <> 

 <div className="modal-overlay flex-vt">
     <div class="modal-box w-50 flex-vt">
     <input  value={newtitle} type="text" placeholder='title' className='note-title' onChange={(e)=>setNewTitle(e.target.value)} />
        <textarea   value={newDesc}  className='note-desc' placeholder='enter note...' onChange={(e)=>setNewDesc(e.target.value)} ></textarea>
        <div className='textEditor-footer flex-hz jc-sb'>
          <div> <select value={newLabel} className="labelInput"  onChange={(e)=>setNewLabel(e.target.value)}>
            {state.labels.map(opt => {
              return <option >{opt}</option>
            })}
          </select></div>
          <div className='flex-hz'>
            <FontAwesomeIcon icon={faPalette} className="icons colorpalette-icon" onClick={(e) => dispatch({ type: "SHOW_MODAL_COLOR_PALETTE", payload: !state.showModalColorPalette })} ></FontAwesomeIcon>
            {state.showModalColorPalette && <ColorPicker  setColor={setNewColor}/>}
            <FontAwesomeIcon className='icons' icon={faBoxArchive} ></FontAwesomeIcon>
            <p className='text-md icons' onClick={saveNewNote}>Save</p>
          </div>
        </div>
       
     </div>
 </div>
    </>
  )
}

export default Modal