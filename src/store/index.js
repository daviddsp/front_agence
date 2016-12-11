/**
 * Created by asolorzano on 11/12/16.
 */

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import RootReducer from '../reducers'
const logger = createLogger()

export default function configStore(initialState){
    const store = createStore(
        RootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    )
    return store
}
