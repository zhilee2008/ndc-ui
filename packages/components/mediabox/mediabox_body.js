'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of Mediabox
 *
 */
var PanelBody = function (_React$Component) {
    (0, _inherits3.default)(PanelBody, _React$Component);

    function PanelBody() {
        (0, _classCallCheck3.default)(this, PanelBody);
        return (0, _possibleConstructorReturn3.default)(this, (PanelBody.__proto__ || (0, _getPrototypeOf2.default)(PanelBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__bd': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelBody;
}(_react2.default.Component);

exports.default = PanelBody;
;
module.exports = exports['default'];