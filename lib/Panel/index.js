'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function Panel(_ref) {
	var _ref$rootClass = _ref.rootClass;
	var rootClass = _ref$rootClass === undefined ? 'panel' : _ref$rootClass;
	var _ref$panelInnerYPosit = _ref.panelInnerYPosition;
	var panelInnerYPosition = _ref$panelInnerYPosit === undefined ? '' : _ref$panelInnerYPosit;
	var image = _ref.image;
	var _ref$title = _ref.title;
	var title = _ref$title === undefined ? '' : _ref$title;
	var _ref$description = _ref.description;
	var description = _ref$description === undefined ? '' : _ref$description;
	var _ref$height = _ref.height;
	var height = _ref$height === undefined ? 300 : _ref$height;
	var _ref$linkTo = _ref.linkTo;
	var linkTo = _ref$linkTo === undefined ? '/' : _ref$linkTo;
	var loading = _ref.loading;

	var renderReady = function renderReady() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h2',
				{ className: 'text-truncate m0 mb1' },
				title
			),
			_react2.default.createElement(
				'p',
				{ className: 'text-truncate h5 m0' },
				description
			)
		);
	};

	var renderLoading = function renderLoading() {
		return 'Loading...';
	};

	return _react2.default.createElement(
		_reactRouter.Link,
		{ className: rootClass, to: linkTo },
		_react2.default.createElement(
			'div',
			{ style: { height: height } },
			image && !loading && _react2.default.createElement('img', { className: rootClass + '__image', src: image, alt: title }),
			_react2.default.createElement(
				'div',
				{ className: rootClass + '__inner ' + rootClass + '__inner--' + panelInnerYPosition },
				loading ? renderLoading() : renderReady()
			)
		)
	);
};

exports.default = Panel;