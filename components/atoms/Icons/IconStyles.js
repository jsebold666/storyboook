import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

export const StyledSvg = styled.svg`
  & path {
    transition: stroke 350ms ease;
  }
  & text {
    transition: fill 350ms ease;
  }

  /* normal hover */
  ${props => {
    return (
      !props.disabledHover &&
      css`
        &:hover path {
          stroke: ${props => (props.hoverColor ? props.hoverColor : colors['periwinkle'])};
        }

        &:hover text {
          fill: ${props => (props.hoverColor ? props.hoverColor : colors['periwinkle'])};
        }
      `
    );
  }} ${props => {
      return (
        props.isHovering &&
        !props.disabledHover &&
        css`
          & path {
            stroke: ${props => (props.hoverColor ? props.hoverColor : colors['periwinkle'])};
          }

          & text {
            fill: ${props => (props.hoverColor ? props.hoverColor : colors['periwinkle'])};
          }
        `
      );
    }};
`;

export const StyledSvgBorder = styled.path`
  stroke-width: 1.7;
  transform: translate(1px, 1px);
  fill: none;
  stroke: ${props => (props.color ? props.color : colors['bluey-grey'])};
`;
