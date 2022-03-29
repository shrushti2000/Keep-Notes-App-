import { faBoxArchive, faPenToSquare, faThumbTack, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Note.css'

const Note = ({ noteItem }) => {
  return (
    <div className='note-container flex-vt' style={{ backgroundColor: `${noteItem.color}` }}>
      <FontAwesomeIcon className="icons note-pin-icon" icon={faThumbTack}  ></FontAwesomeIcon>
      <h4 className='note-title'>{noteItem.title}</h4>
      <h5 className='note-desc'>{noteItem.desc}</h5>
      <p className='text-sm note-label'>{noteItem.label}</p>
      <div className='note-container-footer flex-hz jc-sb'>
        <p className='text-sm'>Created at 3/29/2022</p>
        <div className='flex-hz'>
          <FontAwesomeIcon className='icons' icon={faPenToSquare} ></FontAwesomeIcon>
          <FontAwesomeIcon className='icons' icon={faBoxArchive} ></FontAwesomeIcon>
          <FontAwesomeIcon className='icons' icon={faTrash} ></FontAwesomeIcon>
        </div>

      </div>
    </div>
  )
}

export default Note