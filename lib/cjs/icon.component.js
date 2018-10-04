'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  &&& {\n    color: ', ';\n    font-size: ', ';\n    margin: ', ';\n    padding: ', ';\n  }\n'], ['\n  &&& {\n    color: ', ';\n    font-size: ', ';\n    margin: ', ';\n    padding: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// primitive component for fontawesome icons. className should be the icon name e.g. 'fa fa-check'
exports.default = _styledComponents2.default.i.attrs({
  className: function className(props) {
    return props.faIcon;
  }
})(_templateObject, function (props) {
  return props.color;
}, function (props) {
  return props.size;
}, function (props) {
  return props.margin || 0;
}, function (props) {
  return props.padding || 0;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pY29uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiaSIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJmYUljb24iLCJjb2xvciIsInNpemUiLCJtYXJnaW4iLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFDQTtrQkFDZUEsMkJBQU9DLENBQVAsQ0FBU0MsS0FBVCxDQUFlO0FBQzVCQyxhQUFXO0FBQUEsV0FBU0MsTUFBTUMsTUFBZjtBQUFBO0FBRGlCLENBQWYsQyxrQkFJRjtBQUFBLFNBQVNELE1BQU1FLEtBQWY7QUFBQSxDLEVBQ0k7QUFBQSxTQUFTRixNQUFNRyxJQUFmO0FBQUEsQyxFQUNIO0FBQUEsU0FBU0gsTUFBTUksTUFBTixJQUFnQixDQUF6QjtBQUFBLEMsRUFDQztBQUFBLFNBQVNKLE1BQU1LLE9BQU4sSUFBaUIsQ0FBMUI7QUFBQSxDIiwiZmlsZSI6Imljb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIHByaW1pdGl2ZSBjb21wb25lbnQgZm9yIGZvbnRhd2Vzb21lIGljb25zLiBjbGFzc05hbWUgc2hvdWxkIGJlIHRoZSBpY29uIG5hbWUgZS5nLiAnZmEgZmEtY2hlY2snXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5pLmF0dHJzKHtcclxuICBjbGFzc05hbWU6IHByb3BzID0+IHByb3BzLmZhSWNvbixcclxufSlgXHJcbiAgJiYmIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5zaXplfTtcclxuICAgIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW4gfHwgMH07XHJcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgfHwgMH07XHJcbiAgfVxyXG5gO1xyXG4iXX0=