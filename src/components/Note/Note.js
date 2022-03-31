import { faBoxArchive, faPenToSquare, faThumbTack, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Note.css'

const Note = ({ noteItem }) => {
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
          <FontAwesomeIcon className='icons' icon={faTrash} ></FontAwesomeIcon>
        </div>

      </div>
    </div>
  )
}

export default Note