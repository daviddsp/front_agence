webpackHotUpdate(0,{

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configStore;

	var _redux = __webpack_require__(201);

	var _reduxThunk = __webpack_require__(278);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(279);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(285);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by asolorzano on 11/12/16.
	 */

	var logger = (0, _reduxLogger2.default)();

	function configStore(initialState) {
	    var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));
	}

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouterRedux = __webpack_require__(286);

	var _redux = __webpack_require__(201);

	var _app = __webpack_require__(291);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducers = (0, _redux.combineReducers)({
	  app: _app2.default,
	  routing: _reactRouterRedux.routerReducer
	}); /**
	     * Created by asolorzano on 11/12/16.
	     */
	exports.default = rootReducers;

/***/ }

})