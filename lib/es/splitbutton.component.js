var _templateObject = _taggedTemplateLiteralLoose(['\n  background: ', ';\n  display: flex;\n  flex-direction: row;\n'], ['\n  background: ', ';\n  display: flex;\n  flex-direction: row;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: ', ';\n  opacity: ', ';\n  height: 34px;\n  width: 33px;\n  &&& {\n    margin-left: 0.1rem;\n  }\n'], ['\n  background: ', ';\n  opacity: ', ';\n  height: 34px;\n  width: 33px;\n  &&& {\n    margin-left: 0.1rem;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
import Icon from './icon.component';
import './main.scss';

var Wrapper = styled.section(_templateObject, function (props) {
  return props.theme.contentBackgroundColor;
});

var DropdownMenuButton = styled(DropdownMenu)(_templateObject2, function (props) {
  return props.primary ? props.theme.formControls.button.primaryBackgroundColor : props.theme.formControls.button.backgroundColor;
}, function (props) {
  return props.disabled ? 0.65 : 1;
});

var menuIcon = React.createElement(Icon, {
  faIcon: 'fa fa-angle-down',
  color: 'white',
  size: '2rem',
  padding: '0',
  margin: '5px 10px 0px 10px'
});

var SplitButton = function SplitButton(_ref) {
  var id = _ref.id,
      title = _ref.title,
      disabled = _ref.disabled,
      menuDisabled = _ref.menuDisabled,
      menuItems = _ref.menuItems,
      onButtonClick = _ref.onButtonClick,
      icon = _ref.icon,
      primary = _ref.primary;
  return React.createElement(
    ThemeProvider,
    { theme: theme },
    React.createElement(
      Wrapper,
      { id: id },
      React.createElement(
        Primitive.Button,
        { disabled: disabled, primary: primary, onClick: onButtonClick },
        icon,
        title
      ),
      React.createElement(DropdownMenuButton, {
        id: id + '-dropdown',
        title: menuIcon,
        disabled: menuDisabled,
        primary: primary ? 1 : 0,
        menuItems: menuItems
      })
    )
  );
};

SplitButton.defaultProps = {
  disabled: false,
  icon: null,
  menuDisabled: false,
  onButtonClick: function onButtonClick() {},
  primary: false
};

export default SplitButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdGJ1dHRvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiVGhlbWVQcm92aWRlciIsIkRyb3Bkb3duTWVudSIsIlByaW1pdGl2ZSIsInRoZW1lIiwiSWNvbiIsIldyYXBwZXIiLCJzZWN0aW9uIiwicHJvcHMiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiRHJvcGRvd25NZW51QnV0dG9uIiwicHJpbWFyeSIsImZvcm1Db250cm9scyIsImJ1dHRvbiIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNhYmxlZCIsIm1lbnVJY29uIiwiU3BsaXRCdXR0b24iLCJpZCIsInRpdGxlIiwibWVudURpc2FibGVkIiwibWVudUl0ZW1zIiwib25CdXR0b25DbGljayIsImljb24iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxhQUFqQixRQUFzQyxtQkFBdEM7QUFDQSxTQUFTQyxZQUFULFFBQTZCLDRCQUE3QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLEtBQXBCLFFBQWlDLGtDQUFqQztBQUNBLE9BQU9DLElBQVAsTUFBaUIsa0JBQWpCO0FBQ0EsT0FBTyxhQUFQOztBQUVBLElBQU1DLFVBQVVOLE9BQU9PLE9BQWpCLGtCQUNVO0FBQUEsU0FBU0MsTUFBTUosS0FBTixDQUFZSyxzQkFBckI7QUFBQSxDQURWLENBQU47O0FBTUEsSUFBTUMscUJBQXFCVixPQUFPRSxZQUFQLENBQXJCLG1CQUNVO0FBQUEsU0FBVU0sTUFBTUcsT0FBTixHQUN0QkgsTUFBTUosS0FBTixDQUFZUSxZQUFaLENBQXlCQyxNQUF6QixDQUFnQ0Msc0JBRFYsR0FFdEJOLE1BQU1KLEtBQU4sQ0FBWVEsWUFBWixDQUF5QkMsTUFBekIsQ0FBZ0NFLGVBRnBCO0FBQUEsQ0FEVixFQUlPO0FBQUEsU0FBVVAsTUFBTVEsUUFBTixHQUFpQixJQUFqQixHQUF3QixDQUFsQztBQUFBLENBSlAsQ0FBTjs7QUFZQSxJQUFNQyxXQUNKLG9CQUFDLElBQUQ7QUFDRSxVQUFPLGtCQURUO0FBRUUsU0FBTSxPQUZSO0FBR0UsUUFBSyxNQUhQO0FBSUUsV0FBUSxHQUpWO0FBS0UsVUFBTztBQUxULEVBREY7O0FBVUEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFDbEJDLEVBRGtCLFFBQ2xCQSxFQURrQjtBQUFBLE1BRWxCQyxLQUZrQixRQUVsQkEsS0FGa0I7QUFBQSxNQUdsQkosUUFIa0IsUUFHbEJBLFFBSGtCO0FBQUEsTUFJbEJLLFlBSmtCLFFBSWxCQSxZQUprQjtBQUFBLE1BS2xCQyxTQUxrQixRQUtsQkEsU0FMa0I7QUFBQSxNQU1sQkMsYUFOa0IsUUFNbEJBLGFBTmtCO0FBQUEsTUFPbEJDLElBUGtCLFFBT2xCQSxJQVBrQjtBQUFBLE1BUWxCYixPQVJrQixRQVFsQkEsT0FSa0I7QUFBQSxTQVVsQjtBQUFDLGlCQUFEO0FBQUEsTUFBZSxPQUFPUCxLQUF0QjtBQUNFO0FBQUMsYUFBRDtBQUFBLFFBQVMsSUFBSWUsRUFBYjtBQUNFO0FBQUMsaUJBQUQsQ0FBVyxNQUFYO0FBQUEsVUFBa0IsVUFBVUgsUUFBNUIsRUFBc0MsU0FBU0wsT0FBL0MsRUFBd0QsU0FBU1ksYUFBakU7QUFDR0MsWUFESDtBQUVHSjtBQUZILE9BREY7QUFLRSwwQkFBQyxrQkFBRDtBQUNFLFlBQU9ELEVBQVAsY0FERjtBQUVFLGVBQU9GLFFBRlQ7QUFHRSxrQkFBVUksWUFIWjtBQUlFLGlCQUFTVixVQUFVLENBQVYsR0FBYyxDQUp6QjtBQUtFLG1CQUFXVztBQUxiO0FBTEY7QUFERixHQVZrQjtBQUFBLENBQXBCOztBQW1EQUosWUFBWU8sWUFBWixHQUEyQjtBQUN6QlQsWUFBVSxLQURlO0FBRXpCUSxRQUFNLElBRm1CO0FBR3pCSCxnQkFBYyxLQUhXO0FBSXpCRSxpQkFBZSx5QkFBTSxDQUFFLENBSkU7QUFLekJaLFdBQVM7QUFMZ0IsQ0FBM0I7O0FBUUEsZUFBZU8sV0FBZiIsImZpbGUiOiJzcGxpdGJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IFByaW1pdGl2ZSwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24uY29tcG9uZW50JztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5jb25zdCBEcm9wZG93bk1lbnVCdXR0b24gPSBzdHlsZWQoRHJvcGRvd25NZW51KWBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMucHJpbWFyeSA/XG4gICAgcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5wcmltYXJ5QmFja2dyb3VuZENvbG9yIDpcbiAgICBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLmJhY2tncm91bmRDb2xvcil9O1xuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IDAuNjUgOiAxKX07XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDMzcHg7XG4gICYmJiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgbWVudUljb24gPSAoXG4gIDxJY29uXG4gICAgZmFJY29uPVwiZmEgZmEtYW5nbGUtZG93blwiXG4gICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgc2l6ZT1cIjJyZW1cIlxuICAgIHBhZGRpbmc9XCIwXCJcbiAgICBtYXJnaW49XCI1cHggMTBweCAwcHggMTBweFwiXG4gIC8+XG4pO1xuXG5jb25zdCBTcGxpdEJ1dHRvbiA9ICh7XG4gIGlkLFxuICB0aXRsZSxcbiAgZGlzYWJsZWQsXG4gIG1lbnVEaXNhYmxlZCxcbiAgbWVudUl0ZW1zLFxuICBvbkJ1dHRvbkNsaWNrLFxuICBpY29uLFxuICBwcmltYXJ5LFxufSkgPT4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxXcmFwcGVyIGlkPXtpZH0+XG4gICAgICA8UHJpbWl0aXZlLkJ1dHRvbiBkaXNhYmxlZD17ZGlzYWJsZWR9IHByaW1hcnk9e3ByaW1hcnl9IG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9PlxuICAgICAgICB7aWNvbn1cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9QcmltaXRpdmUuQnV0dG9uPlxuICAgICAgPERyb3Bkb3duTWVudUJ1dHRvblxuICAgICAgICBpZD17YCR7aWR9LWRyb3Bkb3duYH1cbiAgICAgICAgdGl0bGU9e21lbnVJY29ufVxuICAgICAgICBkaXNhYmxlZD17bWVudURpc2FibGVkfVxuICAgICAgICBwcmltYXJ5PXtwcmltYXJ5ID8gMSA6IDB9XG4gICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgLz5cbiAgICA8L1dyYXBwZXI+XG4gIDwvVGhlbWVQcm92aWRlcj5cbik7XG5cblNwbGl0QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlQ2xvc2luZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgXSksXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnaXRlbScsICdkaXZpZGVyJ10pLFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyhQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZSldKS5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBtZW51RGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkJ1dHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgcHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5TcGxpdEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaWNvbjogbnVsbCxcbiAgbWVudURpc2FibGVkOiBmYWxzZSxcbiAgb25CdXR0b25DbGljazogKCkgPT4ge30sXG4gIHByaW1hcnk6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BsaXRCdXR0b247XG4iXX0=