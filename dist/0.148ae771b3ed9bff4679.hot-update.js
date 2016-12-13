webpackHotUpdate(0,{

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadConsultors = exports.dispatchcambiar = exports.SET_CONSULTORS = exports.TOGGLE_LOAD_CONSULTORS = exports.CAMBIARAPP = undefined;

	var _es6Promise = __webpack_require__(478);

	var _es6Promise2 = _interopRequireDefault(_es6Promise);

	var _isomorphicFetch = __webpack_require__(476);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_es6Promise2.default.polyfill(); /**
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

	        (0, _isomorphicFetch2.default)('http://localhost:8000/api/v1/consultores', { method: 'get', mode: 'no-cors' }).then(function (resp) {
	            return resp.text();
	        }).then(function (sd, s) {
	            console.log(sd, s);
	        });
	    };
	};

/***/ }

})