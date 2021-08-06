import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

export const YearsContainer = styled.ul`
  font-size: 18px;
  height: 346px;
  width: 312px;
  min-width: 312px;
  list-style: none;
  margin: 0;
  overflow-y: auto;
  padding: 8px 0px;
  box-sizing: border-box;
`;

export const YearItem = styled.li`
  cursor: pointer;
  line-height: 2.4;
  text-align: center;

  ${props =>
    props.active &&
    css`
      color: ${colors.periwinkle};
      font-size: 24px;
      font-weight: 500;
    `};
`;
