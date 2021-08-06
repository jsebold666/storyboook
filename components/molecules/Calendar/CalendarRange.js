import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Material-UI
import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';

// styles
import {
  CalendarContainer,
  CalendarNav,
  CalendarNavTitle,
  CalendarIconButton
} from './CalendarStyles';

// atoms
import { CalendarMonthRange } from '../../atoms/CalendarMonth';

// utils
import dateUtils from '../../utils/date';

const getCalendarTitle = date => {
  if (!date || !(date instanceof Date)) return;

  const fullMonth = dateUtils.getFullMonth(date);
  const fullYear = date.getFullYear();

  return `${fullMonth} ${fullYear}`;
};

const DIRECTION_STEPS = { left: -1, right: 1 }; // retroceder/avancar mes

class CalendarRange extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      viewDate: props.startDate || new Date(),
      startDate: props.startDate || null,
      endDate: props.endDate || null
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.changeViewMonth = this.changeViewMonth.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.startDate !== this.props.startDate) {
      this.setState({
        viewDate: this.props.startDate || new Date(),
        startDate: this.props.startDate
      });
    }

    if (prevProps.endDate !== this.props.endDate) {
      this.setState({
        endDate: this.props.endDate
      });
    }
  }

  onChangeHandler(date) {
    const dateRange = { startDate: null, endDate: null };
    const { startDate, endDate } = this.state;

    // TODO: refatorar em um futuro proximo
    if (startDate && endDate) {
      if (date.getTime() < startDate.getTime()) {
        dateRange.startDate = date;
        dateRange.endDate = endDate;
      } else if (date.getTime() > endDate.getTime()) {
        dateRange.startDate = startDate;
        dateRange.endDate = date;
      } else {
        dateRange.startDate = date;
        dateRange.endDate = null;
      }
    } else if (startDate && !endDate) {
      if (date.getTime() > this.state.startDate.getTime()) {
        dateRange.startDate = this.state.startDate;
        dateRange.endDate = date;
      } else {
        dateRange.startDate = date;
        dateRange.endDate = this.state.startDate;
      }
    } else if (!startDate && endDate) {
      dateRange.startDate = date;
      dateRange.endDate = this.state.endDate;
    } else {
      dateRange.startDate = date;
    }

    this.setState({
      viewDate: date,
      ...dateRange
    });

    if (this.props.onChange) this.props.onChange(dateRange);
  }

  changeViewMonth = event => {
    const direction = event.currentTarget.id;
    this.setState({
      direction,
      viewDate: dateUtils.addMonths(this.state.viewDate, DIRECTION_STEPS[direction])
    });
  };

  render() {
    return (
      <CalendarContainer>
        <CalendarNav>
          <CalendarIconButton id="left" aria-label="Mês anterior" onClick={this.changeViewMonth}>
            <LeftIcon />
          </CalendarIconButton>

          <CalendarNavTitle>{getCalendarTitle(this.state.viewDate)}</CalendarNavTitle>

          <CalendarIconButton id="right" aria-label="Próximo mês" onClick={this.changeViewMonth}>
            <RightIcon />
          </CalendarIconButton>
        </CalendarNav>

        <CalendarMonthRange
          key={this.state.viewDate.getMonth()}
          disabledDates={this.props.disabledDates}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          onChange={this.onChangeHandler}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          viewDate={this.state.viewDate}
          sundayFirstDayOfWeek={this.props.sundayFirstDayOfWeek}
          outlineToday={this.props.outlineToday}
          showToday={this.props.showToday}
        />
      </CalendarContainer>
    );
  }
}

CalendarRange.defaultProps = {
  minDate: new Date(1900, 0, 1),
  maxDate: new Date(2100, 0, 1),
  sundayFirstDayOfWeek: true,
  outlineToday: false,
  disabledDates: [],
  display: 'months'
};

CalendarRange.propTypes = {
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  sundayFirstDayOfWeek: PropTypes.bool,
  outlineToday: PropTypes.bool,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  display: PropTypes.oneOf(['months', 'years']),

  onChange: PropTypes.func
};

export default CalendarRange;
