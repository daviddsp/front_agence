webpackHotUpdate(0,{

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by asolorzano on 11/12/16.
	                                                                                                                                                                                                                                                                   */


	var _App = __webpack_require__(360);

	var initial = { logout: false };

	var App = function App() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
	    var action = arguments[1];

	    var newState = null;
	    switch (action.type) {
	        case _App.CAMBIARAPP:
	            newState = _extends({}, state, action.payload);
	            return newState;
	            break;
	        default:
	            return state;
	            break;
	    }
	};

	exports.default = App;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(238);

	var _MainContainer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../containers/MainContainer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _MainContainer2 = _interopRequireDefault(_MainContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by asolorzano on 11/12/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Root = function (_Component) {
	    _inherits(Root, _Component);

	    function Root() {
	        _classCallCheck(this, Root);

	        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	    }

	    _createClass(Root, [{
	        key: 'render',
	        value: function render() {
	            var history = this.props.history;

	            return _react2.default.createElement(
	                _reactRouter.Router,
	                { history: history },
	                _react2.default.createElement(_reactRouter.Route, { path: '/', component: _MainContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _MainContainer2.default })
	            );
	        }
	    }]);

	    return Root;
	}(_react.Component);

	exports.default = Root;

/***/ },

/***/ 360:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by asolorzano on 11/12/16.
	 */

	var CAMBIARAPP = exports.CAMBIARAPP = 'CAMBIARAPP';

	var dispatchcambiar = exports.dispatchcambiar = function dispatchcambiar(estado) {
	    return {
	        type: CAMBIARAPP, payload: {
	            logout: estado
	        }
	    };
	};

/***/ }

})