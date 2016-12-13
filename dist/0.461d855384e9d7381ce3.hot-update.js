webpackHotUpdate(0,{

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(224);

	var _MainContainer = __webpack_require__(277);

	var _MainContainer2 = _interopRequireDefault(_MainContainer);

	var _ConsultoresTabla = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ConsultoresTabla\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _ConsultoresTabla2 = _interopRequireDefault(_ConsultoresTabla);

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
	                _react2.default.createElement(_reactRouter.Route, { path: '/consultores/:desde/:hasta/:consultors', component: ConsultoresTabla }),
	                _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _MainContainer2.default })
	            );
	        }
	    }]);

	    return Root;
	}(_react.Component);

	exports.default = Root;

/***/ }

})