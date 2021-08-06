import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';
import IconButton from '@material-ui/core/IconButton';

export const CalendarContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 312px;
  padding: ${props => (props.display === 'years' ? '0px' : '8px')};
`;

export const CalendarNav = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarNavTitle = styled.span`
  font-weight: 500;
  line-height: 50px;
  color: ${colors.periwinkle};
`;

export const CalendarIconButton = styled(IconButton)`
  width: 40px;
  height: 40px;
  padding: 8px !important;
`;
