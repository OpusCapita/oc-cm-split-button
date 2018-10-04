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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdGJ1dHRvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJEcm9wZG93bk1lbnVCdXR0b24iLCJEcm9wZG93bk1lbnUiLCJwcmltYXJ5IiwiZm9ybUNvbnRyb2xzIiwiYnV0dG9uIiwicHJpbWFyeUJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImRpc2FibGVkIiwibWVudUljb24iLCJTcGxpdEJ1dHRvbiIsImlkIiwidGl0bGUiLCJtZW51RGlzYWJsZWQiLCJtZW51SXRlbXMiLCJvbkJ1dHRvbkNsaWNrIiwiaWNvbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVVDLDJCQUFPQyxPQUFqQixrQkFDVTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsc0JBQXJCO0FBQUEsQ0FEVixDQUFOOztBQU1BLElBQU1DLHFCQUFxQixnQ0FBT0MsMkJBQVAsQ0FBckIsbUJBQ1U7QUFBQSxTQUFVSixNQUFNSyxPQUFOLEdBQ3RCTCxNQUFNQyxLQUFOLENBQVlLLFlBQVosQ0FBeUJDLE1BQXpCLENBQWdDQyxzQkFEVixHQUV0QlIsTUFBTUMsS0FBTixDQUFZSyxZQUFaLENBQXlCQyxNQUF6QixDQUFnQ0UsZUFGcEI7QUFBQSxDQURWLEVBSU87QUFBQSxTQUFVVCxNQUFNVSxRQUFOLEdBQWlCLElBQWpCLEdBQXdCLENBQWxDO0FBQUEsQ0FKUCxDQUFOOztBQVlBLElBQU1DLFdBQ0osOEJBQUMsY0FBRDtBQUNFLFVBQU8sa0JBRFQ7QUFFRSxTQUFNLE9BRlI7QUFHRSxRQUFLLE1BSFA7QUFJRSxXQUFRLEdBSlY7QUFLRSxVQUFPO0FBTFQsRUFERjs7QUFVQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUNsQkMsRUFEa0IsUUFDbEJBLEVBRGtCO0FBQUEsTUFFbEJDLEtBRmtCLFFBRWxCQSxLQUZrQjtBQUFBLE1BR2xCSixRQUhrQixRQUdsQkEsUUFIa0I7QUFBQSxNQUlsQkssWUFKa0IsUUFJbEJBLFlBSmtCO0FBQUEsTUFLbEJDLFNBTGtCLFFBS2xCQSxTQUxrQjtBQUFBLE1BTWxCQyxhQU5rQixRQU1sQkEsYUFOa0I7QUFBQSxNQU9sQkMsSUFQa0IsUUFPbEJBLElBUGtCO0FBQUEsTUFRbEJiLE9BUmtCLFFBUWxCQSxPQVJrQjtBQUFBLFNBVWxCO0FBQUMsbUNBQUQ7QUFBQSxNQUFlLE9BQU9KLHdCQUF0QjtBQUNFO0FBQUMsYUFBRDtBQUFBLFFBQVMsSUFBSVksRUFBYjtBQUNFO0FBQUMsb0NBQUQsQ0FBVyxNQUFYO0FBQUEsVUFBa0IsVUFBVUgsUUFBNUIsRUFBc0MsU0FBU0wsT0FBL0MsRUFBd0QsU0FBU1ksYUFBakU7QUFDR0MsWUFESDtBQUVHSjtBQUZILE9BREY7QUFLRSxvQ0FBQyxrQkFBRDtBQUNFLFlBQU9ELEVBQVAsY0FERjtBQUVFLGVBQU9GLFFBRlQ7QUFHRSxrQkFBVUksWUFIWjtBQUlFLGlCQUFTVixVQUFVLENBQVYsR0FBYyxDQUp6QjtBQUtFLG1CQUFXVztBQUxiO0FBTEY7QUFERixHQVZrQjtBQUFBLENBQXBCOztBQW1EQUosWUFBWU8sWUFBWixHQUEyQjtBQUN6QlQsWUFBVSxLQURlO0FBRXpCUSxRQUFNLElBRm1CO0FBR3pCSCxnQkFBYyxLQUhXO0FBSXpCRSxpQkFBZSx5QkFBTSxDQUFFLENBSkU7QUFLekJaLFdBQVM7QUFMZ0IsQ0FBM0I7O2tCQVFlTyxXIiwiZmlsZSI6InNwbGl0YnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0IHsgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmNvbnN0IERyb3Bkb3duTWVudUJ1dHRvbiA9IHN0eWxlZChEcm9wZG93bk1lbnUpYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5wcmltYXJ5ID9cbiAgICBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLnByaW1hcnlCYWNrZ3JvdW5kQ29sb3IgOlxuICAgIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24uYmFja2dyb3VuZENvbG9yKX07XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC42NSA6IDEpfTtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzNweDtcbiAgJiYmIHtcbiAgICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICB9XG5gO1xuXG5jb25zdCBtZW51SWNvbiA9IChcbiAgPEljb25cbiAgICBmYUljb249XCJmYSBmYS1hbmdsZS1kb3duXCJcbiAgICBjb2xvcj1cIndoaXRlXCJcbiAgICBzaXplPVwiMnJlbVwiXG4gICAgcGFkZGluZz1cIjBcIlxuICAgIG1hcmdpbj1cIjVweCAxMHB4IDBweCAxMHB4XCJcbiAgLz5cbik7XG5cbmNvbnN0IFNwbGl0QnV0dG9uID0gKHtcbiAgaWQsXG4gIHRpdGxlLFxuICBkaXNhYmxlZCxcbiAgbWVudURpc2FibGVkLFxuICBtZW51SXRlbXMsXG4gIG9uQnV0dG9uQ2xpY2ssXG4gIGljb24sXG4gIHByaW1hcnksXG59KSA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPFdyYXBwZXIgaWQ9e2lkfT5cbiAgICAgIDxQcmltaXRpdmUuQnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gcHJpbWFyeT17cHJpbWFyeX0gb25DbGljaz17b25CdXR0b25DbGlja30+XG4gICAgICAgIHtpY29ufVxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1ByaW1pdGl2ZS5CdXR0b24+XG4gICAgICA8RHJvcGRvd25NZW51QnV0dG9uXG4gICAgICAgIGlkPXtgJHtpZH0tZHJvcGRvd25gfVxuICAgICAgICB0aXRsZT17bWVudUljb259XG4gICAgICAgIGRpc2FibGVkPXttZW51RGlzYWJsZWR9XG4gICAgICAgIHByaW1hcnk9e3ByaW1hcnkgPyAxIDogMH1cbiAgICAgICAgbWVudUl0ZW1zPXttZW51SXRlbXN9XG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgPC9UaGVtZVByb3ZpZGVyPlxuKTtcblxuU3BsaXRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVDbG9zaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5lbGVtZW50LFxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBdKSxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydpdGVtJywgJ2RpdmlkZXInXSksXG4gIH0pKS5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbKFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlKV0pLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG1lbnVEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQnV0dG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBwcmltYXJ5OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblNwbGl0QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpY29uOiBudWxsLFxuICBtZW51RGlzYWJsZWQ6IGZhbHNlLFxuICBvbkJ1dHRvbkNsaWNrOiAoKSA9PiB7fSxcbiAgcHJpbWFyeTogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdEJ1dHRvbjtcbiJdfQ==