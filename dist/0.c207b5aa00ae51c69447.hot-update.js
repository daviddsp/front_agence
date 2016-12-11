webpackHotUpdate(0,{

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouterRedux = __webpack_require__(270);

	var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _app = __webpack_require__(275);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducers = (0, _redux.combineReducers)({
	  app: _app2.default
	}); /**
	     * Created by asolorzano on 11/12/16.
	     */
	exports.default = rootReducers;

/***/ },

/***/ 275:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * Created by asolorzano on 11/12/16.
	 */

	var initial = { logout: false };

	var App = function App() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
	    var action = arguments[1];

	    var newState = null;
	    switch (action.type) {
	        case 'CAMBIAR':
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