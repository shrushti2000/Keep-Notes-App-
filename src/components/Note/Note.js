import { faBoxArchive, faPenToSquare, faThumbTack, faTrash, faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { Action } from 'history'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { StateContext } from '../../Context/StateProvider'
import './Note.css'
const Note = ({ noteItem }) => {
  const { state, dispatch } = useContext(StateContext)
  const { token } = useContext(AuthContext)
  const deleteNoteHandler = async () => {
    try {
      const res = await axios.delete(`/api/notes/${noteItem._id}`, {
        headers: {
          authorization: token,
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      dispatch({ type: 'SET_NOTES', payload: res.data.notes })
      dispatch({ type: 'SET_TRASHED_NOTES', payload: noteItem })
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <div className='note-container flex-vt' style={{ backgroundColor: `${noteItem.color}` }}>
      <FontAwesomeIcon className="icons note-pin-icon" icon={faThumbTack}  ></FontAwesomeIcon>
      <p className='note-item-title'>{noteItem.title}</p>
      <p className='note-item-desc'>{noteItem.desc}</p>
      <p className='text-sm note-label'>{noteItem.label}</p>
      <div className='note-item-container-footer flex-hz jc-sb'>
        <p className='text-sm'>Created at 3/29/2022</p>
        <div className='flex-hz'>
            <FontAwesomeIcon className='icons' icon={faPenToSquare} ></FontAwesomeIcon>
            <FontAwesomeIcon className='icons' icon={faBoxArchive} ></FontAwesomeIcon>
            <FontAwesomeIcon className='icons' icon={faTrash} onClick={deleteNoteHandler}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}
export default Note