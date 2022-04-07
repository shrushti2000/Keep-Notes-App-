import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../Context/StateProvider'
import './Sidebar.css'
import { useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'

const Sidebar = () => {
  const { state, dispatch } = useContext(StateContext)
  const { theme } = useContext(ThemeContext)
  const [newLabel, setNewLabel] = useState('')

  const addNewLabel = () => {
    dispatch({ type: 'ADD_LABEL', payload: newLabel })
    setNewLabel(' ')
  }

  return (
    <>
      <div className={theme === "light" ? 'sidebar-container flex-vt' : 'sidebar-container-dark flex-vt'}>
        <Link className='links' to="/homepage"><h4 className={theme == "light" ? 'sidebar-item' : 'sidebar-item-dark'}>Home</h4></Link>
        <Link className='links' to='/trash'><h4 className={theme == "light" ? 'sidebar-item' : 'sidebar-item-dark'}>Trash</h4></Link>
        <Link className='links' to="/archive"><h4 className={theme == "light" ? 'sidebar-item' : 'sidebar-item-dark'}>Archive</h4></Link>
        <Link className='links' to="/labelfilter" ><h4 className={theme == "light" ? 'sidebar-item' : 'sidebar-item-dark'}>Labels</h4></Link>
        {state.labels.map(item => <label className={theme === "light" ? 'label-item' : 'label-item-dark'}><input type="checkbox" checked={state.filterBy.labels.includes(item)} onClick={(e) => dispatch({ type: 'SET_LABEL_FILTER', payload: item })} />{item}</label>)}
        <label className={theme === "light" ? 'label-item' : 'label-item-dark'}><input type="checkbox" className='label-item' onChange={(e) => dispatch({ type: 'CLEAR_LABEL_FILTER' })} checked={state.filterBy.labels.length===0 && state.notes.length!==0} />all</label>
        <span><input placeholder='add new label...' value={newLabel} className='add-new-label-input' onChange={(e) => setNewLabel(e.target.value)} /><button onClick={addNewLabel} className="btn btn-floating-action"><i class="fa fa-plus"></i></button></span>
        <button className='btn btn-primary' onClick={(e) => dispatch({ type: 'SHOW_TEXT_EDITOR', payload: !state.showTextEditor })}>Add a note</button>
      </div>
    </>
  )
}

export default Sidebar