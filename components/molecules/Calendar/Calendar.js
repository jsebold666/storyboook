import React, { PureComponent, Fragment } from 'react';
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
import CalendarMonth from '../../atoms/CalendarMonth';
import CalendarYear from '../../atoms/CalendarYear';

// utils
import dateUtils from '../../utils/date';

const getCalendarTitle = date => {
  if (!date || !(date instanceof Date)) return;

  const fullMonth = dateUtils.getFullMonth(date);
  const fullYear = date.getFullYear();

  return `${fullMonth} ${fullYear}`;
};

const DIRECTION_STEPS = { left: -1, right: 1 }; // retroceder/avancar mes

class Calendar extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      viewDate: props.selectedDate || new Date(),
      selectedDate: props.selectedDate || null
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.changeViewMonth = this.changeViewMonth.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedDate !== this.props.selectedDate) {
      this.setState({
        viewDate: this.props.selectedDate || new Date(),
        selectedDate: this.props.selectedDate || null
      });
    }
  }

  onChangeHandler(date) {
    this.setState({ viewDate: date, selectedDate: date });
    if (this.props.onChange) this.props.onChange(date);
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
      <CalendarContainer display={this.props.display}>
        {this.props.display === 'months' ? (
          <Fragment>
            <CalendarNav>
              <CalendarIconButton
                id="left"
                aria-label="Mês anterior"
                onClick={this.changeViewMonth}>
                <LeftIcon />
              </CalendarIconButton>

              <CalendarNavTitle>{getCalendarTitle(this.state.viewDate)}</CalendarNavTitle>

              <CalendarIconButton
                id="right"
                aria-label="Próximo mês"
                onClick={this.changeViewMonth}>
                <RightIcon />
              </CalendarIconButton>
            </CalendarNav>

            <CalendarMonth
              disabledDates={this.props.disabledDates}
              key={this.state.viewDate.getMonth()}
              maxDate={this.props.maxDate}
              minDate={this.props.minDate}
              onChange={this.onChangeHandler}
              selectedDate={this.state.selectedDate}
              viewDate={this.state.viewDate}
              sundayFirstDayOfWeek={this.props.sundayFirstDayOfWeek}
              outlineToday={this.props.outlineToday}
            />
          </Fragment>
        ) : (
          <CalendarYear
            maxDate={this.props.maxDate}
            minDate={this.props.minDate}
            viewDate={this.state.viewDate}
            onChange={this.onChangeHandler}
          />
        )}
      </CalendarContainer>
    );
  }
}

Calendar.defaultProps = {
  selectedDate: new Date(),
  minDate: new Date(1900, 0, 1),
  maxDate: new Date(2100, 0, 1),
  sundayFirstDayOfWeek: true,
  outlineToday: false,
  disabledDates: [],
  display: 'months'
};

Calendar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  sundayFirstDayOfWeek: PropTypes.bool,
  outlineToday: PropTypes.bool,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  display: PropTypes.oneOf(['months', 'years']),

  onChange: PropTypes.func
};

export default Calendar;
