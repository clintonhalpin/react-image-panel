'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = function MyComponent() {
    var styles = {
        fontFamily: '"SF UI Text", "Helvetica Neue", arial, san-serif',
        border: '1px solid blue',
        padding: '2rem',
        borderRadius: 3
    };
    return _react2.default.createElement(
        'div',
        { style: styles },
        'Reusable component'
    );
};

exports.default = MyComponent;