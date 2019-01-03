var _templateObject = _taggedTemplateLiteralLoose(['\n  &&& {\n    color: ', ';\n    font-size: ', ';\n    margin: ', ';\n    padding: ', ';\n  }\n'], ['\n  &&& {\n    color: ', ';\n    font-size: ', ';\n    margin: ', ';\n    padding: ', ';\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
// primitive component for fontawesome icons. className should be the icon name e.g. 'fa fa-check'
export default styled.i.attrs(function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pY29uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiaSIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJmYUljb24iLCJjb2xvciIsInNpemUiLCJtYXJnaW4iLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQTtBQUNBLGVBQWVBLE9BQU9DLENBQVAsQ0FBU0MsS0FBVCxDQUFlO0FBQUEsU0FBVTtBQUN0Q0MsZUFBV0MsTUFBTUM7QUFEcUIsR0FBVjtBQUFBLENBQWYsQ0FBZixrQkFJYTtBQUFBLFNBQVNELE1BQU1FLEtBQWY7QUFBQSxDQUpiLEVBS2lCO0FBQUEsU0FBU0YsTUFBTUcsSUFBZjtBQUFBLENBTGpCLEVBTWM7QUFBQSxTQUFTSCxNQUFNSSxNQUFOLElBQWdCLENBQXpCO0FBQUEsQ0FOZCxFQU9lO0FBQUEsU0FBU0osTUFBTUssT0FBTixJQUFpQixDQUExQjtBQUFBLENBUGYiLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIHByaW1pdGl2ZSBjb21wb25lbnQgZm9yIGZvbnRhd2Vzb21lIGljb25zLiBjbGFzc05hbWUgc2hvdWxkIGJlIHRoZSBpY29uIG5hbWUgZS5nLiAnZmEgZmEtY2hlY2snXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuaS5hdHRycyhwcm9wcyA9PiAoe1xuICBjbGFzc05hbWU6IHByb3BzLmZhSWNvbixcbn0pKWBcbiAgJiYmIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnNpemV9O1xuICAgIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy5tYXJnaW4gfHwgMH07XG4gICAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nIHx8IDB9O1xuICB9XG5gO1xuIl19