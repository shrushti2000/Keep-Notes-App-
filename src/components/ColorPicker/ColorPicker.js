import React, { useContext } from 'react'
import { StateContext } from '../../Context/StateProvider';
import './ColorPicker.css'

const ColorPicker = ({ setColor }) => {
  const { state, dispatch } = useContext(StateContext)
  const setNoteColor = (colorItem) => {
    setColor(colorItem)
    dispatch({ type: 'SHOW_COLOR_PALETTE', payload: !state.showColorPalette })
  }
  const setNewColor = (colorItem) => {
    setColor(colorItem)
    dispatch({ type: 'SHOW_MODAL_COLOR_PALETTE', payload: !state.showModalColorPalette })
  }

  const colorPallete = ["#EF6D6D", "#B5FE83", "#9AD0EC", "#FFE162", "#E3BEC6", "#CEAB93", "#F1E0AC", "#D1D1D1", "#F6D7A7", "#8BDB81", "#E7ED9B", "#ACB992"];
  return (
    <div className={state.showModalColorPalette ? 'color-picker-container-modal flex-hz flex-wrap' : 'color-picker-container flex-hz flex-wrap'} >
      {colorPallete.map(colorItem => {
        return <div className='colorItem' style={{ backgroundColor: `${colorItem}` }} onClick={(e) => state.showModalColorPalette ? setNewColor(colorItem) : setNoteColor(colorItem)}></div>
      })}
    </div>
  )
}

export default ColorPicker