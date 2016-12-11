/**
 * Created by asolorzano on 11/12/16.
 */
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers} from 'redux'
import app from './app'


const rootReducers = combineReducers({
    app,
    routing
})



export default rootReducers
