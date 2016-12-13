webpackHotUpdate(0,{

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(194);

	var _Main = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/Main\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Main2 = _interopRequireDefault(_Main);

	var _App = __webpack_require__(345);

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
	        }
	    };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Main2.default);

/***/ }

})