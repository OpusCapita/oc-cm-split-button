import styled from 'styled-components';
// primitive component for fontawesome icons. className should be the icon name e.g. 'fa fa-check'
export default styled.i.attrs({
  className: props => props.faIcon,
})`
  &&& {
    color: ${props => props.color};
    font-size: ${props => props.size};
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};
  }
`;
