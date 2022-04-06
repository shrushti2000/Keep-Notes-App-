import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import reducerFunction from '../reducerFunction'
export const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    showColorPalette: false,
    showModalColorPalette:false,
    showTextEditor: false,
    labels: ["work", "college", "home"],
    notes: [],
    trashedNotes:[],
    archivedNotes:[],
    showModal:false,
    noteToBeChanged:{},
    filterBy:{
     labels:[]
   },
   showtoast:false,
  })

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}
export default StateProvider