import styled from 'styled-components';
import colors from '../../../styles/colors';

const messageSizeMap = {
  small: '16px',
  medium: '20px',
  large: '26px'
};

export const Wrapper = styled.div`
  min-height: 88px;
  background-color: #f1f5f7;
  border: 1px solid #e0e7ec;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 14px 24px;
  position: relative;
  box-sizing: border-box;
`;

export const HeaderWrapper = styled.div`
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${colors['bluish-grey']};
`;

export const Details = styled.span`
  color: ${colors['bluish-grey']};
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
`;

export const MessageWrapper = styled.div`
  -ms-flex: 1 1;
  flex: 1 1;
  -ms-flex-align: end;
  align-items: flex-end;
  display: -ms-flexbox;
  display: flex;
`;

export const Message = styled.div`
  font-family: Rubik, sans-serif;
  font-size: ${props => messageSizeMap[props.size]};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: ${colors['slate']};
  padding-top: 14px;
`;
