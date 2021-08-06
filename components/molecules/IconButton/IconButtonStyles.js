import styled, { css } from 'styled-components';
import ReactHoverObserver from 'react-hover-observer';
import colors from '../../../styles/colors';

export const ContainerHoverObserver = styled(ReactHoverObserver)`
  display: inline-block;
`;

export const IconButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`;

export const IconButtonText = styled.span`
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: ${props => props.color || colors['bluey-grey']};
  width: 58px;
  text-transform: uppercase;
  margin-top: 16px;
  transition: color 350ms ease;

  ${props => {
    return (
      props.isHovering &&
      !props.disabledHover &&
      css`
        & {
          color: ${props => (props.hoverColor ? props.hoverColor : colors.periwinkle)};
        }
      `
    );
  }};
`;
