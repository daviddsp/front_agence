/**
 * Created by asolorzano on 11/12/16.
 */
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export const CAMBIARAPP = 'CAMBIARAPP'
export const TOGGLE_LOAD_CONSULTORS = 'TOGGLE_LOAD_CONSULTORS';
export const SET_CONSULTORS = 'SET_CONSULTORS'

export const dispatchcambiar = (estado)=>{
    return {
        type: CAMBIARAPP, payload: {
            logout: estado
        }
    }
}

const toggleLoadingConsultors = (isLoading)=>{
    return {
        type: TOGGLE_LOAD_CONSULTORS, payload: {
            isLoading
        }
    }
}

const setConsultores = (consultors) => {
	return {
		type: SET_CONSULTORS,
		payload: {
			consultors
		}
	}
}

export const loadConsultors = () => {
    return dispatch => {
    	dispatch(toggleLoadingConsultors(true));
const request = new Request('http://localhost:8000/api/v1/consultores', {method: 'GET', mode: 'cors', credentials: 'false', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}});
    	fetch(request).then(resp => { 
    		return resp.json()
    	}).then((data) => {
    		dispatch(setConsultores(data.data));
    		dispatch(toggleLoadingConsultors(false));
    	}).catch((err) => { console.warn(err) });
    }
}