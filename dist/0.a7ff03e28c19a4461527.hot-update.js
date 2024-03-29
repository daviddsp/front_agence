webpackHotUpdate(0,{

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _reactMdl = __webpack_require__(279);

	var _Consultores = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Consultores\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Consultores2 = _interopRequireDefault(_Consultores);

	var _Relatorio = __webpack_require__(362);

	var _Relatorio2 = _interopRequireDefault(_Relatorio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by asolorzano on 11/12/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Main = function (_Component) {
	    _inherits(Main, _Component);

	    function Main(props) {
	        _classCallCheck(this, Main);

	        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

	        _this._cambiar = _this._cambiar.bind(_this);
	        return _this;
	    }

	    _createClass(Main, [{
	        key: 'render',
	        value: function render() {
	            var logout = this.props.logout;

	            return _react2.default.createElement(
	                _reactMdl.Layout,
	                null,
	                _react2.default.createElement(_Consultores2.default, null),
	                _react2.default.createElement(
	                    _reactMdl.Card,
	                    { shadow: 2, style: { width: '90%', margin: 'auto' } },
	                    _react2.default.createElement(
	                        _reactMdl.CardTitle,
	                        { style: { color: '#3333', height: '100%' } },
	                        'Consultores'
	                    ),
	                    _react2.default.createElement(
	                        _reactMdl.CardText,
	                        null,
	                        _react2.default.createElement(_Relatorio2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        _reactMdl.CardMenu,
	                        { style: { color: '#fff' } },
	                        _react2.default.createElement(_reactMdl.IconButton, { name: 'share' })
	                    )
	                )
	            );
	        }
	    }, {
	        key: '_cambiar',
	        value: function _cambiar() {
	            var _props = this.props,
	                cambiar = _props.cambiar,
	                logout = _props.logout;

	            cambiar(!logout);
	        }
	    }]);

	    return Main;
	}(_react.Component);

	exports.default = Main;

/***/ }

})