import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CalendarRange } from '../Calendar';
import {
  Dialog,
  DatePickerHeader,
  DatePickerTitle,
  DatePickerSubTitle,
  DatePickerActions,
  DefaultButton,
  PrimaryButton
} from './DatePickerStyles';
import dateUtils from '../../utils/date';

class DatePickerDialogRange extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      viewDate: props.startDate || new Date(),
      startDate: props.startDate || null,
      endDate: props.endDate || null,
      open: props.open
    };

    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.onClearHandler = this.onClearHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.open) {
      this.setState({
        open: this.props.open
      });
    }

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

  onCloseHandler() {
    this.setState({ open: false });

    if (this.props.onClose)
      this.props.onClose({
        startDate: this.state.startDate,
        endDate: this.state.endDate
      });
  }

  onClearHandler() {
    this.setState({
      startDate: null,
      endDate: null
    });

    if (this.props.onClear)
      this.props.onClear({
        startDate: null,
        endDate: null
      });
  }

  onChangeHandler(rangeObj) {
    this.setState({ ...rangeObj });

    if (this.props.onChange) this.props.onChange(rangeObj);
    if (this.props.autoOk) this.onCloseHandler();
  }

  showClearButton() {
    return this.props.allowClear && this.state.startDate;
  }

  render() {
    const shortDayOfWeek = dateUtils.getShortDayOfWeek(this.state.viewDate.getDay());
    const shortMonth = dateUtils.getShortMonth(this.state.viewDate);
    const date = this.state.viewDate.getDate();

    return (
      <Dialog
        open={this.state.open}
        disableBackdropClick={this.props.disableBackdropClick}
        disableEscapeKeyDown={this.props.disableEscapeKeyDown}
        name={this.props.name}
        onClose={this.onCloseHandler}>
        {this.props.showHeader && (
          <DatePickerHeader>
            <DatePickerSubTitle id="years">{this.state.viewDate.getFullYear()}</DatePickerSubTitle>
            <DatePickerTitle id="months">
              {shortDayOfWeek}, {shortMonth} {date}
            </DatePickerTitle>
          </DatePickerHeader>
        )}

        <CalendarRange
          onChange={this.onChangeHandler}
          sundayFirstDayOfWeek={this.props.sundayFirstDayOfWeek}
          disabledDates={this.props.disabledDates}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          outlineToday={this.props.outlineToday}
        />

        {!this.props.autoOk && (
          <DatePickerActions>
            {this.props.cancelLabel && (
              <DefaultButton onClick={this.props.onCloseHandler}>
                {this.props.cancelLabel}
              </DefaultButton>
            )}

            {this.showClearButton() && (
              <DefaultButton onClick={this.onClearHandler}>{this.props.clearLabel}</DefaultButton>
            )}

            <PrimaryButton onClick={this.onCloseHandler} autoFocus>
              {this.props.okLabel}
            </PrimaryButton>
          </DatePickerActions>
        )}
      </Dialog>
    );
  }
}

DatePickerDialogRange.defaultProps = {
  open: false,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  autoOk: false,
  okLabel: 'Ok',

  outlineToday: false,

  allowClear: false,
  clearLabel: 'Limpar',

  showHeader: false,
  disabledDates: [],

  startDate: new Date(2100, 0, 1),
  endDate: new Date(1900, 0, 1),
  minDate: new Date(1900, 0, 1),
  maxDate: new Date(2100, 0, 1)
};

DatePickerDialogRange.propTypes = {
  /* dialog props */
  open: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  autoOk: PropTypes.bool,
  allowClear: PropTypes.bool,

  showHeader: PropTypes.bool,
  cancelLabel: PropTypes.string,
  okLabel: PropTypes.string,
  clearLabel: PropTypes.string,

  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),

  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  name: PropTypes.string,

  onClose: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,

  sundayFirstDayOfWeek: PropTypes.bool
};

export default DatePickerDialogRange;
