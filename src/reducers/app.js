/**
 * Created by asolorzano on 11/12/16.
 */
import {TOGGLE_LOAD_CONSULTORS, SET_CONSULTORS} from '../actions/App'

const initial = {
    isLoading: false,
    consultors: []
}


const App = (state=initial, action) => {
    let newState = null
    switch(action.type) {
        case TOGGLE_LOAD_CONSULTORS:
            newState = {...state, ...action.payload}
            return newState
            break;
        case SET_CONSULTORS:
            newState = {...state, ...action.payload}
            return newState;
            break
    default:
    return state
    break;
    }
}

export default App
