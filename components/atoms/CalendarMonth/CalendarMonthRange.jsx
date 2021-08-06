import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import createRange from '../../utils/createRange';
import dateUtils from '../../utils/date';
import CalendarDay from '../CalendarDay';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import colors from '../../../styles/colors';
import { MonthContainer, WeekContainer, WeekLetter, Days } from './CalendarMonthStyles';

const applyDayStyle = (day, sundayFirstDayOfWeek, viewDate) => {
  const style = {};

  if (day === 1) {
    const e = sundayFirstDayOfWeek ? 0 : 1;
    const firstDay = dateUtils.getFirstWeekDay(viewDate) - e;
    style.marginLeft = `${(firstDay >= 0 ? firstDay : 6) * (100 / 7)}%`;
  }

  return style;
};

const Week = props => {
  const days = createRange(0, 7).map(d => dateUtils.getDayOfWeekLetter(d));
  const source = props.sundayFirstDayOfWeek ? days : [...days.slice(1), days[0]];

  return (
    <WeekContainer>{source.map((day, i) => <WeekLetter key={i}>{day}</WeekLetter>)}</WeekContainer>
  );
};

const StyleDayRange = styled(CalendarDay)`
  position: relative;

  ${props =>
    props.inRange &&
    css`
      &::before {
        content: ' ';
        background: ${rgba(colors.periwinkle, 0.21)};
        width: 100%;
        position: absolute;
        height: 13px;
      }
    `}

  ${props =>
    props.inRange &&
    props.firstDayInRange &&
    css`
      &::before {
        width: 3px;
        right: 0;
      }
    `}

  ${props =>
    props.inRange &&
    props.lastDayInRange &&
    css`
      &::before {
        width: 3px;
        left: 0;
      }
    `}
`;

const compareDate = (date, compDate) => date.getTime() === compDate.getTime();

class CalendarMonthRange extends PureComponent {
  onChangeHandler = day => {
    const selectedDate = dateUtils.setDay(this.props.viewDate, day);
    if (this.props.onChange) this.props.onChange(selectedDate);
  };

  isDayDisabled(date) {
    const { minDate, maxDate, disabledDates } = this.props;
    const dateInDisabled = disabledDates.filter(compDate => compareDate(date, compDate)).length > 0;
    return dateUtils.dateOutOfRange(date, minDate, maxDate) || dateInDisabled;
  }

  isDaySelected(date) {
    return (
      (this.props.startDate && compareDate(date, dateUtils.cloneAsDate(this.props.startDate))) ||
      (this.props.endDate && compareDate(date, dateUtils.cloneAsDate(this.props.endDate)))
    );
  }

  isDayInRange(date) {
    return (
      this.props.startDate &&
      this.props.endDate &&
      dateUtils.cloneAsDate(this.props.startDate).getTime() <= date.getTime() &&
      dateUtils.cloneAsDate(this.props.endDate).getTime() >= date.getTime()
    );
  }

  isFirstDayInRange(date) {
    return this.props.startDate && compareDate(date, dateUtils.cloneAsDate(this.props.startDate));
  }

  isLastDayInRange(date) {
    return this.props.endDate && compareDate(date, dateUtils.cloneAsDate(this.props.endDate));
  }

  isDayOutlined(date) {
    return (
      this.props.outlineToday &&
      !this.isDayInRange(date) &&
      compareDate(date, dateUtils.cloneAsDate(new Date()))
    );
  }

  renderDays() {
    return createRange(1, dateUtils.getDaysInMonth(this.props.viewDate) + 1).map(i => {
      const date = new Date(this.props.viewDate.getFullYear(), this.props.viewDate.getMonth(), i);
      return (
        <StyleDayRange
          key={i}
          day={i}
          disabled={this.isDayDisabled(date)}
          selected={this.isDaySelected(date)}
          outlined={this.isDayOutlined(date)}
          inRange={this.isDayInRange(date)}
          firstDayInRange={this.isFirstDayInRange(date)}
          lastDayInRange={this.isLastDayInRange(date)}
          style={applyDayStyle(i, this.props.sundayFirstDayOfWeek, this.props.viewDate)}
          onClick={this.onChangeHandler}
        />
      );
    });
  }

  render() {
    return (
      <MonthContainer>
        <Week sundayFirstDayOfWeek={this.props.sundayFirstDayOfWeek} />
        <Days>{this.renderDays()}</Days>
      </MonthContainer>
    );
  }
}

CalendarMonthRange.propTypes = {
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  sundayFirstDayOfWeek: PropTypes.bool,
  outlineToday: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  viewDate: PropTypes.instanceOf(Date), // data da visualização do mês, que não é, necessariamente, o mês da data selecionada

  onChange: PropTypes.func
};

CalendarMonthRange.defaultProps = {
  disabledDates: [],
  sundayFirstDayOfWeek: true,
  outlineToday: false
};

export default CalendarMonthRange;
