import { faBoxArchive, faThumbTack, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Note.css'

const Note = () => {
  return (
    <div className='note-container flex-vt'>
          <FontAwesomeIcon className="icons note-pin-icon" icon={faThumbTack}  ></FontAwesomeIcon>
        <h4 className='note-title'>title</h4>
        <h5 className='note-desc'>fjhasjdfhaskfdas</h5>
        <div  className='note-container-footer flex-hz jc-sb'>
            <p className='text-sm'>Created at 3/29/2022</p>
           <div className='flex-hz'>
           <FontAwesomeIcon className='icons' icon={faBoxArchive} ></FontAwesomeIcon>
           <FontAwesomeIcon className='icons' icon={faTrash} ></FontAwesomeIcon>
           </div>

        </div>
    </div>
  )
}

export default Note