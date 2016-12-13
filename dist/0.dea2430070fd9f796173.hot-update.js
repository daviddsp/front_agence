webpackHotUpdate(0,{

/***/ 460:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by asolorzano on 11/12/16.
	 */
	/*import es6Promises from 'es6-promise';
	import Fetch from 'isomorphic-fetch';
	es6Promises.polyfill();*/

	var CAMBIARAPP = exports.CAMBIARAPP = 'CAMBIARAPP';
	var TOGGLE_LOAD_CONSULTORS = exports.TOGGLE_LOAD_CONSULTORS = 'TOGGLE_LOAD_CONSULTORS';
	var SET_CONSULTORS = exports.SET_CONSULTORS = 'SET_CONSULTORS';

	var dispatchcambiar = exports.dispatchcambiar = function dispatchcambiar(estado) {
	    return {
	        type: CAMBIARAPP, payload: {
	            logout: estado
	        }
	    };
	};

	var toggleLoadingConsultors = function toggleLoadingConsultors(isLoading) {
	    return {
	        type: TOGGLE_LOAD_CONSULTORS, payload: {
	            isLoading: isLoading
	        }
	    };
	};

	var setConsultores = function setConsultores(consultors) {
	    return {
	        type: SET_CONSULTORS,
	        payload: {
	            consultors: consultors
	        }
	    };
	};

	var loadConsultors = exports.loadConsultors = function loadConsultors() {
	    return function (dispatch) {
	        dispatch(toggleLoadingConsultors(true));

	        fetch('http://localhost:8000/api/v1/consultores', { method: 'get', mode: 'no-cors' }).then(function (resp) {
	            console.log('ddddd', resp);

	            return resp.json();
	        });
	    };
	};

/***/ }

})