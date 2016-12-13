webpackHotUpdate(0,{

/***/ 361:
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


	var Consultores = function (_Component) {
	    _inherits(Consultores, _Component);

	    function Consultores(props) {
	        _classCallCheck(this, Consultores);

	        var _this = _possibleConstructorReturn(this, (Consultores.__proto__ || Object.getPrototypeOf(Consultores)).call(this, props));

	        _this._cambiar = _this._cambiar.bind(_this);
	        return _this;
	    }

	    _createClass(Consultores, [{
	        key: 'render',
	        value: function render() {
	            var logout = this.props.logout;

	            return _react2.default.createElement(
	                _reactMdl.Grid,
	                { className: 'demo-grid-1' },
	                _react2.default.createElement(
	                    _reactMdl.Cell,
	                    { col: 5 },
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        'Periodo:'
	                    ),
	                    _react2.default.createElement(_reactMdl.Textfield, {
	                        onChange: function onChange() {},
	                        label: 'Text...',
	                        style: { width: '200px' }
	                    })
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

	    return Consultores;
	}(_react.Component);

	exports.default = Consultores;

/***/ }

})