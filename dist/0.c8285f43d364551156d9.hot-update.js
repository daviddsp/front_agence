webpackHotUpdate(0,{

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configStore;

	var _redux = __webpack_require__(201);

	var _reduxThunk = __webpack_require__(224);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(225);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(231);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by asolorzano on 11/12/16.
	 */

	console.log(_reducers2.default);
	var logger = (0, _reduxLogger2.default)();

	function configStore(initialState) {
	    var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));
	}

/***/ }

})