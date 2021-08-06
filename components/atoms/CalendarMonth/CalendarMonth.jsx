import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import createRange from '../../utils/createRange';
import dateUtils from '../../utils/date';
import CalendarDay from '../CalendarDay';
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

const compareDate = (date, compDate) => date.getTime() === compDate.getTime();

class CalendarMonth extends PureComponent {
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
      this.props.selectedDate && compareDate(date, dateUtils.cloneAsDate(this.props.selectedDate))
    );
  }

  isDayOutlined(date) {
    return this.props.outlineToday && compareDate(date, dateUtils.cloneAsDate(new Date()));
  }

  renderDays() {
    return createRange(1, dateUtils.getDaysInMonth(this.props.viewDate) + 1).map(i => {
      const date = new Date(this.props.viewDate.getFullYear(), this.props.viewDate.getMonth(), i);
      return (
        <CalendarDay
          key={i}
          day={i}
          disabled={this.isDayDisabled(date)}
          selected={this.isDaySelected(date)}
          outlined={this.isDayOutlined(date)}
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

CalendarMonth.propTypes = {
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  sundayFirstDayOfWeek: PropTypes.bool,
  outlineToday: PropTypes.bool,
  selectedDate: PropTypes.instanceOf(Date),
  viewDate: PropTypes.instanceOf(Date), // data da visualização do mês, que não é, necessariamente, o mês da data selecionada

  onChange: PropTypes.func
};

CalendarMonth.defaultProps = {
  disabledDates: [],
  sundayFirstDayOfWeek: true,
  outlineToday: false
};

export default CalendarMonth;
