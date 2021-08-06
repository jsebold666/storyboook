import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Calendar';
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

class DatePickerDialog extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      selectedDate: props.selectedDate || null,
      viewDate: props.selectedDate || new Date(),
      open: props.open,
      display: props.display || 'months'
    };

    this.onClearHandler = this.onClearHandler.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeDisplayHandler = this.onChangeDisplayHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.open) {
      this.setState({
        open: this.props.open,
        display: this.props.open ? 'months' : this.state.display
      });
    }

    if (prevProps.selectedDate !== this.props.selectedDate) {
      this.setState({
        selectedDate: this.props.selectedDate,
        viewDate: this.props.selectedDate || new Date()
      });
    }

    if (prevProps.display !== this.props.display) {
      this.setState({ display: this.props.display });
    }
  }

  onCloseHandler() {
    this.setState({ open: false });

    if (this.props.onClose) this.props.onClose(this.state.selectedDate);
  }

  onClearHandler() {
    this.setState({ viewDate: new Date(), selectedDate: null });

    if (this.props.onClear) this.props.onClear(null);
  }

  onChangeHandler(date) {
    const currentDisplay = this.state.display;
    this.setState({
      selectedDate: date,
      viewDate: date,
      display: 'months'
    });

    if (this.props.onChange) this.props.onChange(date);

    // se o display atual for 'years', entao nao deve fechar automaticamente
    if (this.props.autoOk && currentDisplay === 'months') this.onCloseHandler();
  }

  onChangeDisplayHandler(event) {
    this.setState({ display: event.target.id });
  }

  showClearButton() {
    return (
      this.props.allowClear &&
      dateUtils.cloneAsDate(this.state.viewDate).getTime() !==
        dateUtils.cloneAsDate(new Date()).getTime()
    );
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
        onExit={this.onCloseHandler}>
        {this.props.showHeader && (
          <DatePickerHeader allowYearSelection>
            <DatePickerSubTitle
              id="years"
              display={this.state.display}
              onClick={this.onChangeDisplayHandler}>
              {this.state.viewDate.getFullYear()}
            </DatePickerSubTitle>
            <DatePickerTitle
              id="months"
              display={this.state.display}
              onClick={this.onChangeDisplayHandler}>
              {shortDayOfWeek}, {shortMonth} {date}
            </DatePickerTitle>
          </DatePickerHeader>
        )}

        <Calendar
          onChange={this.onChangeHandler}
          sundayFirstDayOfWeek={this.props.sundayFirstDayOfWeek}
          outlineToday={this.props.outlineToday}
          disabledDates={this.props.disabledDates}
          selectedDate={this.state.selectedDate}
          display={this.state.display}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
        />

        {!this.props.autoOk && (
          <DatePickerActions>
            {this.props.cancelLabel && (
              <DefaultButton onClick={this.onCloseHandler}>{this.props.cancelLabel}</DefaultButton>
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

DatePickerDialog.defaultProps = {
  open: false,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  outlineToday: false,
  sundayFirstDayOfWeek: true,
  autoOk: false,
  okLabel: 'Ok',
  display: 'months',

  allowClear: false,
  clearLabel: 'Limpar',

  showHeader: true,
  selectedDate: new Date(),
  disabledDates: []
};

DatePickerDialog.propTypes = {
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
  display: PropTypes.oneOf(['months', 'display']),

  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),

  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  name: PropTypes.string,

  onClose: PropTypes.func,
  onClear: PropTypes.func,
  onChange: PropTypes.func,

  sundayFirstDayOfWeek: PropTypes.bool,
  outlineToday: PropTypes.bool,
  selectedDate: PropTypes.instanceOf(Date)
};

export default DatePickerDialog;
