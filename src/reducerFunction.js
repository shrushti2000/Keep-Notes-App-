const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'SHOW_COLOR_PALETTE': return { ...state, showColorPalette: action.payload }
        case 'SET_LABELS': return { ...state, labels: action.payload }
        case 'ADD_LABEL': return { ...state, labels: [...state.labels, action.payload] }
        case 'SET_NOTES': return { ...state, notes: action.payload }
        case 'SHOW_TEXT_EDITOR': return { ...state,showTextEditor:action.payload }
        case 'SET_TRASHED_NOTES': return { ...state,trashedNotes:[...state.trashedNotes,action.payload ]}
        case 'SET_ARCHIVED_NOTES': return { ...state,archivedNotes:action.payload}
        case 'OPEN_MODAL':return {...state,showModal:action.payload}
       case 'SET_NOTE_TO_BE_CHANGED':return{...state,noteToBeChanged:action.payload}
case 'SHOW_MODAL_COLOR_PALETTE': return { ...state, showModalColorPalette: action.payload }
case 'SET_LABEL_FILTER': return (!state.filterBy.labels.includes(action.payload)) ?   { ...state, filterBy:{...state.filterBy,labels:state.filterBy.labels.concat(action.payload)}} : {...state,filterBy:{...state.filterBy,labels:state.filterBy.labels.filter(item=>item!==action.payload)}}
case 'CLEAR_LABEL_FILTER':return {...state,filterBy:{...state.filterBy,labels:[]}}  
case 'SET_SHOW_TOAST':return {...state,showtoast:action.payload}      
default: return state
    }
}

export default reducerFunction
export const getfilteredData=(state,data)=>{
   let filteredData=[...data]
   if(state.filterBy.labels.length!==0){
       filteredData=data.filter(item=>state.filterBy.labels.includes(item.label))
   }
    return filteredData
}