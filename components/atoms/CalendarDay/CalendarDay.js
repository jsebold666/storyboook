import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

const DayContainer = styled.div`
  width: 41.7142857143px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  ${props => {
    return (
      !props.selected &&
      !props.disabled &&
      css`
        &:hover span {
          background: ${colors['light-periwinkle']};
          color: ${colors.white};
        }
      `
    );
  }}

  ${props =>
    props.selected &&
    css`
      span {
        background: ${colors.periwinkle};
        color: ${colors.white};
      }
    `}

   ${props =>
     props.outlined &&
     !props.selected &&
     css`
       span {
         border: 1px solid ${colors.periwinkle};
       }
     `}

  ${props =>
    !props.disabled &&
    css`
      span {
        cursor: pointer;
      }
    `}

  opacity: ${props => (props.disabled ? '.25' : '1')};
`;

const DayText = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  line-height: 36px;
  height: 36px;
  width: 36px;
  text-align: center;
  font-size: 12px;
`;

class CalendarDay extends PureComponent {
  constructor() {
    super();

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(this.props.day);
    }
  }

  render() {
    return (
      <DayContainer {...this.props} onClick={this.onClickHandler}>
        <DayText>{this.props.day}</DayText>
      </DayContainer>
    );
  }
}

CalendarDay.defaultProps = {
  selected: false,
  disabled: false,
  outlined: false,
  day: ''
};

CalendarDay.propTypes = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /* actions */
  onClick: PropTypes.func
};

export default CalendarDay;
