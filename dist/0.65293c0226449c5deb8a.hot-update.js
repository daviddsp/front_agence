webpackHotUpdate(0,{

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(224);

	var _reactMdl = __webpack_require__(279);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonBox = function (_Component) {
	    _inherits(ButtonBox, _Component);

	    function ButtonBox(props) {
	        _classCallCheck(this, ButtonBox);

	        return _possibleConstructorReturn(this, (ButtonBox.__proto__ || Object.getPrototypeOf(ButtonBox)).call(this, props));
	    }

	    _createClass(ButtonBox, [{
	        key: '_goTo',
	        value: function _goTo() {
	            _reactRouter.browserHistory.push('/consultores/AQUI_VA_LA_FECHA_DESDE/AQUI_VA_LA_FECHA_GASTA/AQUI_VA_LOS_CONSULTORES');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        _reactMdl.Button,
	                        { raised: true, ripple: true, colored: true },
	                        'Relatorio'
	                    ),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement('br', null)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        _reactMdl.Button,
	                        { raised: true, ripple: true, accent: true },
	                        'Grafico'
	                    ),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement('br', null)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        _reactMdl.Button,
	                        { raised: true, ripple: true, colored: true },
	                        'Pizza'
	                    )
	                )
	            );
	        }
	    }]);

	    return ButtonBox;
	}(_react.Component);

	exports.default = ButtonBox;

/***/ }

})