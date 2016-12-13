webpackHotUpdate(0,{

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadConsultors = exports.dispatchcambiar = exports.SET_CONSULTORS = exports.TOGGLE_LOAD_CONSULTORS = exports.CAMBIARAPP = undefined;

	var _isomorphicFetch = __webpack_require__(476);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(478).pollyfill(); /**
	                                     * Created by asolorzano on 11/12/16.
	                                     */
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

	        (0, _isomorphicFetch2.default)('http://localhost:8000/api/v1/consultores', { mode: 'cors' }).then(function (resp) {
	            if (resp.status >= 400) {
	                dispatch(toggleLoadingConsultors(false));
	                return dispatch(setError('Hubo un error al consumir la API'));
	            }

	            return resp.json();
	        }).then(function (consultores) {
	            dispatch(toggleLoadingConsultors(false));
	            dispatch(setConsultores(consultores));
	        });
	    };
	};

/***/ }

})