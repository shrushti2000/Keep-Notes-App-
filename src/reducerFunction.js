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
        default: return state
    }
}

export default reducerFunction