import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
import Icon from './icon.component';
import './main.scss';

const Wrapper = styled.section`
  background: ${props => props.theme.contentBackgroundColor};
  display: flex;
  flex-direction: row;
`;

const DropdownMenuButton = styled(DropdownMenu)`
  background: ${props => (props.primary ?
    props.theme.formControls.button.primaryBackgroundColor :
    props.theme.formControls.button.backgroundColor)};
  opacity: ${props => (props.disabled ? 0.65 : 1)};
  height: 34px;
  width: 33px;
  &&& {
    margin-left: 0.1rem;
  }
`;

const menuIcon = (
  <Icon
    faIcon="fa fa-angle-down"
    color="white"
    size="2rem"
    padding="0"
    margin="5px 10px 0px 10px"
  />
);

const SplitButton = ({
  id,
  title,
  disabled,
  menuDisabled,
  menuItems,
  onButtonClick,
  icon,
  primary,
}) => (
  <ThemeProvider theme={theme}>
    <Wrapper id={id}>
      <Primitive.Button disabled={disabled} primary={primary} onClick={onButtonClick}>
        {icon}
        {title}
      </Primitive.Button>
      <DropdownMenuButton
        id={`${id}-dropdown`}
        title={menuIcon}
        disabled={menuDisabled}
        primary={primary ? 1 : 0}
        menuItems={menuItems}
      />
    </Wrapper>
  </ThemeProvider>
);

SplitButton.propTypes = {
  id: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    disabled: PropTypes.bool,
    disableClosing: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.element,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    title: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.element,
    ]),
    type: PropTypes.oneOf(['item', 'divider']),
  })).isRequired,
  title: PropTypes.oneOfType([(PropTypes.string, PropTypes.node)]).isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  menuDisabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
  primary: PropTypes.bool,
};

SplitButton.defaultProps = {
  disabled: false,
  icon: null,
  menuDisabled: false,
  onButtonClick: () => {},
  primary: false,
};

export default SplitButton;
