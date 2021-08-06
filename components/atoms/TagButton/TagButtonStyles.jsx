import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';
// import { default as CloseIconMui } from '@material-ui/icons/Close';
// import { withStyles } from '@material-ui/core/styles';

export const TagWrapper = styled.div`
  padding: 8px 16px;
  background-color: ${colors.white};
  box-sizing: border-box;
  width: auto;
  height: 32px;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  border: solid 1px ${colors['light-greyish']};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 350ms ease;
  flex-shrink: 0;

  ${props =>
    props.active &&
    css`
      background-color: ${colors.periwinkle};
      border-color: ${colors.periwinkle};

      & ${Text} {
        color: ${colors.white};
        margin-right: ${props => (props.text && !props.disabled ? '8px' : 0)};
      }
    `};

  ${props =>
    !props.active &&
    !props.disabled &&
    css`
      &:hover ${Text} {
        color: ${colors.periwinkle};
      }
    `};
`;

export const Text = styled.span`
  font-family: 'Rubik', 'sans-serif';
  font-size: 12px;
  font-weight: 500;
  color: ${colors['bluey-grey']};
  user-select: none;
`;

export const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  padding: 0px;
  border-radius: 50%;
  background-color: ${colors['cloudy-blue']};
`;

// export const CloseIcon = withStyles({
//   root: {
//     fontSize: '16px',
//     color: colors.white
//   }
// })(CloseIconMui);
