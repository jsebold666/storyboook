import styled from 'styled-components';
import colors from '../../../styles/colors';

const typeColors = {
  error: colors['salmon'],

  warning: colors['pale-orange'],
  success: colors['greenish-teal']
};

export const AlertBoxContainer = styled.div`
  min-height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 16px 24px;
  background-color: ${props => typeColors[props.type] || 'transparent'};
`;

export const Icon = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const Message = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #fff;
  flex: 1;
`;

Message.displayName = 'Message';
