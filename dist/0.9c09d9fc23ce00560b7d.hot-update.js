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

	var CAMBIARAPP = exports.CAMBIARAPP = 'CAMBIARAPP';
	var START_LOAD_CONSULTORS = exports.START_LOAD_CONSULTORS = 'START_LOAD_CONSULTORS';

	var dispatchcambiar = exports.dispatchcambiar = function dispatchcambiar(estado) {
	    return {
	        type: CAMBIARAPP, payload: {
	            logout: estado
	        }
	    };
	};

	var startLoadingConsultors = function startLoadingConsultors() {
	    return {
	        type: START_LOAD_CONSULTORS, payload: {
	            isLoading: true
	        }
	    };
	};

	var loadConsultors = exports.loadConsultors = function loadConsultors(dispatch) {
	    return {
	        type: START_LOAD_CONSULTORS, payload: {
	            isLoading: true
	        }
	    };
	};

/***/ }

})