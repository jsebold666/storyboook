import styled from 'styled-components';
import colors from '../../../styles/colors';

export const MonthContainer = styled.div`
  background-color: ${colors.white};
  width: 296px;
  height: 280px;
`;

export const WeekContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  height: 40px;
  line-height: 40px;
`;

export const WeekLetter = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.38);
  text-align: center;
  width: 41.7142857143px; /* 296 / 7 (total days) */
`;

export const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
`;
