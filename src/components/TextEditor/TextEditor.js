import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './TextEditor.css'
import { useState } from 'react'
import { StateContext } from '../../Context/StateProvider'
import ColorPicker from '../ColorPicker/ColorPicker'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import Toast from '../Toast/Toast'

const TextEditor = () => {
  const { theme } = useContext(ThemeContext)
  const { state, dispatch } = useContext(StateContext)
  const { token } = useContext(AuthContext)
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('')
  const [color, setColor] = useState('')
  const [isPinned, setIsPinned] = useState(false)
  const [label, setLabel] = useState('')
  const [msg, setMsg] = useState('')
  const currentTime=new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const time=new Date().getTime()
  
  const noteObj = {
    title, desc, color, isPinned, label, date,time,currentTime
  }
  const submitHandler = () => {
    if (title !== '' && desc !== '' && color !== '' && label !== '') {
      try {
        fetch("/api/notes", {
          method: "POST",
          body: JSON.stringify({ note: noteObj }),
          headers: {
            "authorization": token,
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(res => res.json())
          .then(data => dispatch({ type: 'SET_NOTES', payload: data.notes }))

        setTitle('')
        setDesc('')
        setIsPinned(false)
        setColor('')
      } catch (error) {
        console.log('error')
      }
    } else {
      dispatch({ type: 'SET_SHOW_TOAST', payload: !state.showtoast })
      setMsg("Please fill all the fields!")
    }
  }
  return (
    <>
      {state.showtoast === true && <Toast msg={msg} />}
      <div className={theme === "light" ? 'textEditor-container flex-vt' : 'textEditor-container-dark flex-vt'}>
        <FontAwesomeIcon className="icons pin-icon" icon={faThumbTack} onClick={(e) => setIsPinned(!isPinned)} ></FontAwesomeIcon>
        <input className={theme === "dark" ? 'note-title input-dark' : 'note-title'} value={title} type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
        <textarea className={theme === "dark" ? 'note-desc input-dark' : 'note-desc'} value={desc} placeholder='enter note...' onChange={(e) => setDesc(e.target.value)}></textarea>
        <div className='textEditor-footer flex-hz jc-sb'>
          <div> <select value={label} className="labelInput" onChange={(e) => setLabel(e.target.value)}>
            {state.labels.map(opt => {
              return <option value={opt} >{opt}</option>
            })}
          </select></div>
          <div className='flex-hz'>
            <FontAwesomeIcon icon={faPalette} className="icons colorpalette-icon" onClick={(e) => dispatch({ type: "SHOW_COLOR_PALETTE", payload: !state.showColorPalette })} ></FontAwesomeIcon>
            {state.showColorPalette && <ColorPicker setColor={setColor} />}
            <p className='text-md icons' onClick={submitHandler}>Save</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default TextEditor