webpackHotUpdate(0,{

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadConsultors = exports.dispatchcambiar = exports.START_LOAD_CONSULTORS = exports.CAMBIARAPP = undefined;

	var _isomorphicFetch = __webpack_require__(476);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CAMBIARAPP = exports.CAMBIARAPP = 'CAMBIARAPP'; /**
	                                                     * Created by asolorzano on 11/12/16.
	                                                     */

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

	var loadConsultors = exports.loadConsultors = function loadConsultors() {
	    return function (dispatch) {
	        dispatch(startLoadingConsultors);

	        (0, _isomorphicFetch2.default)(URL).then(function (resp) {
	            if (resp.status >= 400) {
	                dispatch(EndLoadingConsultors);
	                return dispatch(setError('Hubo un error al consumir la API'));
	            }

	            return resp.json();
	        }).then(function (consultores) {
	            dispatch(EndLoadingConsultors);
	            dispatch(setConsultores(consultores));
	        });
	    };
	};

/***/ }

})