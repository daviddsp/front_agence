/**
 * Created by asolorzano on 11/12/16.
 */
import {CAMBIARAPP} from '../actions/App'

const initial = {logout:false}


const App = (state=initial, action) => {
    let newState = null
    switch(action.type) {
        case CAMBIARAPP:
            newState = {...state, ...action.payload}
            return newState
            break
    default:
    return state
    break
    }
}

export default App
