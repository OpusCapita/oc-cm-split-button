'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  &&& {\n    color: ', ';\n    font-size: ', ';\n    margin: ', ';\n    padding: ', ';\n  }\n'], ['\n  &&& {\n    color: ', ';\n    font-size: ', ';\n    margin: ', ';\n    padding: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// primitive component for fontawesome icons. className should be the icon name e.g. 'fa fa-check'
exports.default = _styledComponents2.default.i.attrs(function (props) {
  return {
    className: props.faIcon
  };
})(_templateObject, function (props) {
  return props.color;
}, function (props) {
  return props.size;
}, function (props) {
  return props.margin || 0;
}, function (props) {
  return props.padding || 0;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pY29uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiaSIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJmYUljb24iLCJjb2xvciIsInNpemUiLCJtYXJnaW4iLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFDQTtrQkFDZUEsMkJBQU9DLENBQVAsQ0FBU0MsS0FBVCxDQUFlO0FBQUEsU0FBVTtBQUN0Q0MsZUFBV0MsTUFBTUM7QUFEcUIsR0FBVjtBQUFBLENBQWYsQyxrQkFJRjtBQUFBLFNBQVNELE1BQU1FLEtBQWY7QUFBQSxDLEVBQ0k7QUFBQSxTQUFTRixNQUFNRyxJQUFmO0FBQUEsQyxFQUNIO0FBQUEsU0FBU0gsTUFBTUksTUFBTixJQUFnQixDQUF6QjtBQUFBLEMsRUFDQztBQUFBLFNBQVNKLE1BQU1LLE9BQU4sSUFBaUIsQ0FBMUI7QUFBQSxDIiwiZmlsZSI6Imljb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBwcmltaXRpdmUgY29tcG9uZW50IGZvciBmb250YXdlc29tZSBpY29ucy4gY2xhc3NOYW1lIHNob3VsZCBiZSB0aGUgaWNvbiBuYW1lIGUuZy4gJ2ZhIGZhLWNoZWNrJ1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmkuYXR0cnMocHJvcHMgPT4gKHtcbiAgY2xhc3NOYW1lOiBwcm9wcy5mYUljb24sXG59KSlgXG4gICYmJiB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5zaXplfTtcbiAgICBtYXJnaW46ICR7cHJvcHMgPT4gcHJvcHMubWFyZ2luIHx8IDB9O1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyB8fCAwfTtcbiAgfVxuYDtcbiJdfQ==