import React from 'react'

const reducerFunction = (state,action) => {
 switch(action.type){
     case 'SHOW_COLOR_PALETTE':return {...state,showColorPalette:action.payload}
   
     case 'SET_LABELS':return {...state,labels:action.payload}
     case 'ADD_LABEL':return {...state,labels:[...state.labels,action.payload]}
    case 'SET_NOTES':return {...state,notes:action.payload}
     default : return state
 }
}

export default reducerFunction