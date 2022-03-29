import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import reducerFunction from '../reducerFunction'
export const StateContext=createContext()

const StateProvider = ({children}) => {
  const [state,dispatch]=useReducer(reducerFunction,{
    showColorPalette:false,
    showTextEditor:false,
    labels:["work","college","home"]
  })
  
  return(
    <StateContext.Provider value={{state,dispatch}}>
    {children}
</StateContext.Provider>
  )
}
export default StateProvider