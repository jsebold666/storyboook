import styled from 'styled-components';
import colors from '../../../styles/colors';

export const SelectWrapper = styled.div`
    width: 100%;
    background-color: ${colors.white};
    padding: 16px 0;
    box-sizing: border-box;
    min-height: 66px;
    display: flex;
    flex-direction: column;
    position: relative; 
    border : 1px solid #f1f5f7;

    &.isFocusedWrapper {
        border-left: 4px solid ${colors.tealish};
    }

    .validation_msg {

        svg {
            position: absolute;
            top: 34px;
            right:  12px; 
            z-index: 5;
            background: ${colors.white};  
        }
        span {
            font-size: 12px;
            right: 12px;
            position: absolute;
            color: ${colors.periwinkle};
            z-index: 1;
            top: 10px;
        }
    }
    
    .react-select-container {
        background-color: ${colors.white};
        width: 100%;
        position: unset;
        padding: 0 24px; 
    }
    .react-select-container.focused {
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1); 
    }
    .react-select-container .react-select__value-container {
        border-radius: 0;
        flex: 1;
        padding: 0px; 
    }
    .react-select-container .react-select__placeholder {
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: normal;
        color: ${colors.slate};
        margin: 0; 
    }
    .react-select-container .react-select__control {
        border-width: 0;
        border-color: ${colors.white} !important;
        background-color: ${colors.white} !important;
        border-radius: 0 !important;
        box-shadow: none;
        min-height: 33px;
        cursor: pointer; 
    }
    .react-select-container .react-select__menu {
        border-radius: 0;
        margin-top: 0;
        border-color: ${colors.grey};
        border-width: 20px !important;
        z-index: 50;
        left: 0; 
       
    }
    .react-select-container .react-select__menu-list {
        padding: 16px 0; 
    }
    .react-select-container .react-select__menu-list .react-select__option--is-selected {
        color: ${colors.periwinkle};
        background: rgba(${colors.periwinkle}, 0.15); 
    }
    .react-select-container .react-select__indicator-separator {
        width: 0; 
    }
    .react-select-container .react-select__indicators {
        position: absolute;
        top: 0px;
        right: 0; 
    }
    .react-select-container .react-select__option {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 3;
        letter-spacing: normal;
        color: ${colors.grey};
        background-color: ${colors.white};
        padding: 0 24px;
        cursor: pointer; 
    }
    .react-select__option:last-child {
        background:  ${colors.white};
        color: ${colors.periwinkle} !important;
    }
    .react-select-container .react-select__option:last-child:hover {
        opacity: .7; 
    }
    .react-select-container .react-select__option:hover {
        color: ${colors.periwinkle}; 
    }
    .Select[aria-expanded='true'] .react-select-container .react-select__indicators .react-select__indicator.react-select__dropdown-indicator {
        transform: rotate(180deg); 
    }
    .react-select__indicator.react-select__dropdown-indicator {
        color: ${colors.periwinkle};
        padding: 0;
        transform: rotate(0deg);
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
    }

    #react-select-2-input {
        cursor: none !important; 
    }
    // .react-select__indicator.react-select__loading-indicator {
    //     color: ${colors.periwinkle} !important; 
    // }

    // .menu-top .react-select__menu-notice--loading {
    //     margin-top: 130px;
    //     height: 136px; 
    // }

    // .react-select__loading-indicator {
    //     position: relative;
    //     width: 21px;
    //     height: 21px;
    //     background: ${colors.white};
    //     left: 20px;
    //     z-index: 9999; 
    // }
    // .react-select__loading-indicator span {
    //     top: 0;
    //     left: 0;
    //     background: ${colors.white};
    //     display: block;
    //     position: absolute;
    //     width: 14px;
    //     height: 14px;
    //     margin: 2px;
    //     border: 2px solid;
    //     border-radius: 50%;
    //     animation: span 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    //     border-color: ${colors.periwinkle} ${colors.periwinkle} ${colors.periwinkle} ${
  colors.white
}; 
    // }
    // .react-select__loading-indicator span:nth-child(1) {
    //     animation-delay: -0.45s; 
    // }
    // .react-select__loading-indicator span:nth-child(2) {
    //     animation-delay: -0.3s; 
    // }
    // .react-select__loading-indicator span:nth-child(3) {
    //     animation-delay: -0.15s; 
    // }

    @keyframes span {
        0% {
            transform: rotate(0deg); 
        }
        100% {
        transform: rotate(360deg); 
    } 

`;
export const Text = styled.label`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: ${colors.grey};
  margin-left: 24px;
`;
