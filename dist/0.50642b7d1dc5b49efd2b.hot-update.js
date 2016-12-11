webpackHotUpdate(0,{

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouterRedux = __webpack_require__(232);

	var _redux = __webpack_require__(201);

	var _app = __webpack_require__(237);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_reactRouterRedux.routerReducer); /**
	                                               * Created by asolorzano on 11/12/16.
	                                               */


	var rootReducers = (0, _redux.combineReducers)({
	  app: _app2.default,
	  routing: _reactRouterRedux.routerReducer
	});

	exports.default = rootReducers;

/***/ }

})