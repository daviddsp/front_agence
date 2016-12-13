webpackHotUpdate(0,{

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(194);

	var _Main = __webpack_require__(278);

	var _Main2 = _interopRequireDefault(_Main);

	var _App = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions/App\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        logout: state.app.logout
	    };
	}; /**
	    * Created by asolorzano on 11/12/16.
	    */


	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        cambiar: function cambiar(estado) {
	            dispatch((0, _App.dispatchcambiar)(estado));
	        },
	        loadConsultors: function loadConsultors() {
	            dispatch((0, _App.loadConsultors)());
	        }
	    };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Main2.default);

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by asolorzano on 11/12/16.
	                                                                                                                                                                                                                                                                   */


	var _App = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions/App\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var initial = {
	    isLoading: false,
	    consultors: []
	};

	var App = function App() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
	    var action = arguments[1];

	    var newState = null;
	    switch (action.type) {
	        case _App.TOGGLE_LOAD_CONSULTORS:
	            newState = _extends({}, state, action.payload);
	            return newState;
	            break;
	        case _App.SET_CONSULTORS:
	            newState = _extends({}, state, action.payload);
	            return newState;
	            break;
	        default:
	            return state;
	            break;
	    }
	};

	exports.default = App;

/***/ }

})