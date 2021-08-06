import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import createRange from '../../utils/createRange';
import dateUtils from '../../utils/date';
import { YearsContainer, YearItem } from './CalendarYearStyles';

const getRange = (minDate, maxDate) => {
  const min = minDate && minDate instanceof Date ? minDate.getFullYear() : 1900;
  const max = maxDate && maxDate instanceof Date ? maxDate.getFullYear() : 2100;
  return createRange(min, max);
};

class CalendarYear extends PureComponent {
  constructor(props) {
    super();

    this.yearsNode = null;
    this.activeYearNode = null;

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    if (this.activeYearNode) {
      this.scrollToActive();
    }
  }

  componentDidUpdate() {
    if (this.activeYearNode) {
      this.scrollToActive();
    }
  }

  scrollToActive() {
    const offset = this.yearsNode.offsetHeight / 2 + this.activeYearNode.offsetHeight / 2;
    this.yearsNode.scrollTop = this.activeYearNode.offsetTop - offset;
  }

  onChangeHandler(event) {
    const year = parseInt(event.currentTarget.id, 10);
    const viewDate = dateUtils.setYear(this.props.viewDate, year);

    if (this.props.onChange) this.props.onChange(viewDate);
  }

  render() {
    const { minDate, maxDate, viewDate } = this.props;

    return (
      <YearsContainer
        innerRef={node => {
          this.yearsNode = node;
        }}>
        {getRange(minDate, maxDate).map(year => {
          const isYearActive =
            viewDate && viewDate instanceof Date && year === viewDate.getFullYear();
          return (
            <YearItem
              id={year}
              key={year}
              active={isYearActive}
              onClick={this.onChangeHandler}
              innerRef={node => {
                if (isYearActive) this.activeYearNode = node;
              }}>
              {year}
            </YearItem>
          );
        })}
      </YearsContainer>
    );
  }
}

export default CalendarYear;
