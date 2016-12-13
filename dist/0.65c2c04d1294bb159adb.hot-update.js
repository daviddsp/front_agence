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
	            var _this2 = this;

	            var logout = this.props.logout;

	            return _react2.default.createElement(
	                _reactMdl.Layout,
	                null,
	                _react2.default.createElement(
	                    _reactMdl.Card,
	                    { shadow: 0, style: { width: '512px', margin: 'auto' } },
	                    _react2.default.createElement(
	                        CardTitle,
	                        { style: { color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' } },
	                        'Welcome'
	                    ),
	                    _react2.default.createElement(
	                        CardText,
	                        null,
	                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'
	                    ),
	                    _react2.default.createElement(
	                        CardActions,
	                        { border: true },
	                        _react2.default.createElement(
	                            _reactMdl.Button,
	                            { colored: true },
	                            'Get Started'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        CardMenu,
	                        { style: { color: '#fff' } },
	                        _react2.default.createElement(_reactMdl.IconButton, { name: 'share' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    logout + ''
	                ),
	                _react2.default.createElement(
	                    _reactMdl.Button,
	                    { onClick: function onClick() {
	                            _this2._cambiar();
	                        } },
	                    'Despachar'
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