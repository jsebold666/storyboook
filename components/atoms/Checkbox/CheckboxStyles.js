import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
`;
Wrapper.displayName = 'Wrapper';

export const Box = styled.span`
  box-sizing: border-box;
  border: 2px solid ${colors['periwinkle']};
  border-radius: 50%;
  background: ${props => (props.checked ? colors['periwinkle'] : 'white')};
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
`;

export const Input = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

Input.displayName = 'Input';

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 16px;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #4a5365;
  color: $slate;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;

export const IconWrapper = styled.div`
  transform: scale(0);
  animation: icon 0.3s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s 1 forwards;

  @keyframes icon {
    from {
      opacity: 0;
      transform: scale(0.3);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
