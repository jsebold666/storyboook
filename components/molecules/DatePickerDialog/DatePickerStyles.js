import { default as DialogMui } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../../styles/colors';

export const Dialog = withStyles({
  paper: { minWidth: '312px' }
})(DialogMui);

export const DatePickerHeader = styled.header`
  background-color: ${colors.periwinkle};
  color: ${colors.white};
  padding: 16px 20px;
  cursor: ${props => (props.allowYearSelection ? 'pointer' : 'default')};
`;

export const DatePickerTitle = styled.h3`
  display: block;
  font-size: 34px;
  font-weight: 500;
  line-height: 40px;
  margin: 0;
  text-transform: capitalize;
  opacity: ${props => (props.display === 'years' ? 0.6 : 1)};
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DatePickerSubTitle = styled.span`
  display: block;
  font-size: 14px;
  opacity: ${props => (props.display === 'years' ? 1 : 0.6)};
  transition: opacity, font-size 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DatePickerActions = styled(DialogActions)`
  margin: 0 0 4px 0px;
`;

export const PrimaryButton = withStyles({
  label: {
    fontFamily: ['Rubik', 'sans-serif'],
    color: colors.periwinkle,
    fontWeight: 500
  }
})(Button);

export const DefaultButton = withStyles({
  label: {
    fontFamily: ['Rubik', 'sans-serif'],
    color: colors['bluey-grey'],
    fontWeight: 500
  }
})(Button);
