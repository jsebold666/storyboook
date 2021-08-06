import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;

  & label {
    padding: 0;
    margin: 16px 24px 6px 24px;
    height: 18px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: ${colors['bluish-grey']};
  }

  & textarea {
    font-family: Rubik, sans-serif;
    padding: 0 24px 16px 24px;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2;
    letter-spacing: normal;
    border: none;
  }

  & textarea:focus {
    outline: none;
  }

  & textarea::placeholder {
    color: ${colors['bluey-grey']};
  }
  & textarea::-moz-placeholder {
    color: ${colors['bluey-grey']};
  }
  & textarea::-webkit-input-placeholder {
    color: ${colors['bluey-grey']};
  }
`;
