'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: ', ';\n  display: flex;\n  flex-direction: row;\n'], ['\n  background: ', ';\n  display: flex;\n  flex-direction: row;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: ', ';\n  opacity: ', ';\n  height: 34px;\n  width: 33px;\n  &&& {\n    margin-left: 0.1rem;\n  }\n'], ['\n  background: ', ';\n  opacity: ', ';\n  height: 34px;\n  width: 33px;\n  &&& {\n    margin-left: 0.1rem;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDropdown = require('@opuscapita/react-dropdown');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _icon = require('./icon.component');

var _icon2 = _interopRequireDefault(_icon);

require('./main.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Wrapper = _styledComponents2.default.section(_templateObject, function (props) {
  return props.theme.contentBackgroundColor;
});

var DropdownMenuButton = (0, _styledComponents2.default)(_reactDropdown.DropdownMenu)(_templateObject2, function (props) {
  return props.primary ? props.theme.formControls.button.primaryBackgroundColor : props.theme.formControls.button.backgroundColor;
}, function (props) {
  return props.disabled ? 0.65 : 1;
});

var menuIcon = _react2.default.createElement(_icon2.default, {
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
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _ocCmCommonLayouts.theme },
    _react2.default.createElement(
      Wrapper,
      { id: id },
      _react2.default.createElement(
        _ocCmCommonLayouts.Primitive.Button,
        { disabled: disabled, primary: primary, onClick: onButtonClick },
        icon,
        title
      ),
      _react2.default.createElement(DropdownMenuButton, {
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

exports.default = SplitButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdGJ1dHRvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJEcm9wZG93bk1lbnVCdXR0b24iLCJEcm9wZG93bk1lbnUiLCJwcmltYXJ5IiwiZm9ybUNvbnRyb2xzIiwiYnV0dG9uIiwicHJpbWFyeUJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImRpc2FibGVkIiwibWVudUljb24iLCJTcGxpdEJ1dHRvbiIsImlkIiwidGl0bGUiLCJtZW51RGlzYWJsZWQiLCJtZW51SXRlbXMiLCJvbkJ1dHRvbkNsaWNrIiwiaWNvbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVVDLDJCQUFPQyxPQUFqQixrQkFDVTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsc0JBQXJCO0FBQUEsQ0FEVixDQUFOOztBQU1BLElBQU1DLHFCQUFxQixnQ0FBT0MsMkJBQVAsQ0FBckIsbUJBQ1U7QUFBQSxTQUFVSixNQUFNSyxPQUFOLEdBQ3RCTCxNQUFNQyxLQUFOLENBQVlLLFlBQVosQ0FBeUJDLE1BQXpCLENBQWdDQyxzQkFEVixHQUV0QlIsTUFBTUMsS0FBTixDQUFZSyxZQUFaLENBQXlCQyxNQUF6QixDQUFnQ0UsZUFGcEI7QUFBQSxDQURWLEVBSU87QUFBQSxTQUFVVCxNQUFNVSxRQUFOLEdBQWlCLElBQWpCLEdBQXdCLENBQWxDO0FBQUEsQ0FKUCxDQUFOOztBQVlBLElBQU1DLFdBQ0osOEJBQUMsY0FBRDtBQUNFLFVBQU8sa0JBRFQ7QUFFRSxTQUFNLE9BRlI7QUFHRSxRQUFLLE1BSFA7QUFJRSxXQUFRLEdBSlY7QUFLRSxVQUFPO0FBTFQsRUFERjs7QUFVQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUNsQkMsRUFEa0IsUUFDbEJBLEVBRGtCO0FBQUEsTUFFbEJDLEtBRmtCLFFBRWxCQSxLQUZrQjtBQUFBLE1BR2xCSixRQUhrQixRQUdsQkEsUUFIa0I7QUFBQSxNQUlsQkssWUFKa0IsUUFJbEJBLFlBSmtCO0FBQUEsTUFLbEJDLFNBTGtCLFFBS2xCQSxTQUxrQjtBQUFBLE1BTWxCQyxhQU5rQixRQU1sQkEsYUFOa0I7QUFBQSxNQU9sQkMsSUFQa0IsUUFPbEJBLElBUGtCO0FBQUEsTUFRbEJiLE9BUmtCLFFBUWxCQSxPQVJrQjtBQUFBLFNBVWxCO0FBQUMsbUNBQUQ7QUFBQSxNQUFlLE9BQU9KLHdCQUF0QjtBQUNFO0FBQUMsYUFBRDtBQUFBLFFBQVMsSUFBSVksRUFBYjtBQUNFO0FBQUMsb0NBQUQsQ0FBVyxNQUFYO0FBQUEsVUFBa0IsVUFBVUgsUUFBNUIsRUFBc0MsU0FBU0wsT0FBL0MsRUFBd0QsU0FBU1ksYUFBakU7QUFDR0MsWUFESDtBQUVHSjtBQUZILE9BREY7QUFLRSxvQ0FBQyxrQkFBRDtBQUNFLFlBQU9ELEVBQVAsY0FERjtBQUVFLGVBQU9GLFFBRlQ7QUFHRSxrQkFBVUksWUFIWjtBQUlFLGlCQUFTVixVQUFVLENBQVYsR0FBYyxDQUp6QjtBQUtFLG1CQUFXVztBQUxiO0FBTEY7QUFERixHQVZrQjtBQUFBLENBQXBCOztBQW1EQUosWUFBWU8sWUFBWixHQUEyQjtBQUN6QlQsWUFBVSxLQURlO0FBRXpCUSxRQUFNLElBRm1CO0FBR3pCSCxnQkFBYyxLQUhXO0FBSXpCRSxpQkFBZSx5QkFBTSxDQUFFLENBSkU7QUFLekJaLFdBQVM7QUFMZ0IsQ0FBM0I7O2tCQVFlTyxXIiwiZmlsZSI6InNwbGl0YnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24uY29tcG9uZW50JztcclxuaW1wb3J0ICcuL21haW4uc2Nzcyc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmA7XHJcblxyXG5jb25zdCBEcm9wZG93bk1lbnVCdXR0b24gPSBzdHlsZWQoRHJvcGRvd25NZW51KWBcclxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5wcmltYXJ5ID9cclxuICAgIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24ucHJpbWFyeUJhY2tncm91bmRDb2xvciA6XHJcbiAgICBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLmJhY2tncm91bmRDb2xvcil9O1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC42NSA6IDEpfTtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgd2lkdGg6IDMzcHg7XHJcbiAgJiYmIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgbWVudUljb24gPSAoXHJcbiAgPEljb25cclxuICAgIGZhSWNvbj1cImZhIGZhLWFuZ2xlLWRvd25cIlxyXG4gICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICBzaXplPVwiMnJlbVwiXHJcbiAgICBwYWRkaW5nPVwiMFwiXHJcbiAgICBtYXJnaW49XCI1cHggMTBweCAwcHggMTBweFwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmNvbnN0IFNwbGl0QnV0dG9uID0gKHtcclxuICBpZCxcclxuICB0aXRsZSxcclxuICBkaXNhYmxlZCxcclxuICBtZW51RGlzYWJsZWQsXHJcbiAgbWVudUl0ZW1zLFxyXG4gIG9uQnV0dG9uQ2xpY2ssXHJcbiAgaWNvbixcclxuICBwcmltYXJ5LFxyXG59KSA9PiAoXHJcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgIDxXcmFwcGVyIGlkPXtpZH0+XHJcbiAgICAgIDxQcmltaXRpdmUuQnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gcHJpbWFyeT17cHJpbWFyeX0gb25DbGljaz17b25CdXR0b25DbGlja30+XHJcbiAgICAgICAge2ljb259XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L1ByaW1pdGl2ZS5CdXR0b24+XHJcbiAgICAgIDxEcm9wZG93bk1lbnVCdXR0b25cclxuICAgICAgICBpZD17YCR7aWR9LWRyb3Bkb3duYH1cclxuICAgICAgICB0aXRsZT17bWVudUljb259XHJcbiAgICAgICAgZGlzYWJsZWQ9e21lbnVEaXNhYmxlZH1cclxuICAgICAgICBwcmltYXJ5PXtwcmltYXJ5ID8gMSA6IDB9XHJcbiAgICAgICAgbWVudUl0ZW1zPXttZW51SXRlbXN9XHJcbiAgICAgIC8+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgPC9UaGVtZVByb3ZpZGVyPlxyXG4pO1xyXG5cclxuU3BsaXRCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZUNsb3Npbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGljb246IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcclxuICAgIF0pLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnaXRlbScsICdkaXZpZGVyJ10pLFxyXG4gIH0pKS5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFsoUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGUpXSkuaXNSZXF1aXJlZCxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgbWVudURpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkJ1dHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBwcmltYXJ5OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcblNwbGl0QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgaWNvbjogbnVsbCxcclxuICBtZW51RGlzYWJsZWQ6IGZhbHNlLFxyXG4gIG9uQnV0dG9uQ2xpY2s6ICgpID0+IHt9LFxyXG4gIHByaW1hcnk6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BsaXRCdXR0b247XHJcbiJdfQ==