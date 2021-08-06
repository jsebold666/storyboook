import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePickerDialog from '../../molecules/DatePickerDialog';
import InputWrapper from '../InputWrapper';
import GenericInput from '../GenericInput';
import CircularProgress from '@material-ui/core/CircularProgress';
import CalendarIcon from '../../../static/images/calendar.svg';

import 'moment/locale/pt-br';

class DatepickerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: props.value,
      inputDate: props.value,
      isDateValid: true,
      isRangeValid: true,
      invalidMessage: null,
      isDialogOpen: false
    };

    this.dateInput = null;

    this.renderInput = this.renderInput.bind(this);
    this.onClickIconHandler = this.onClickIconHandler.bind(this);
    this.onBlurInputHandler = this.onBlurInputHandler.bind(this);
    this.onChangeDateHandler = this.onChangeDateHandler.bind(this);
    this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
    this.onCloseDialogHandler = this.onCloseDialogHandler.bind(this);
    this.updateStateFromDialog = this.updateStateFromDialog.bind(this);
  }

  componentWillMount() {
    const { selectedDate } = this.state;
    this.setState({ inputDate: this.getFormattedInputValue(selectedDate) });
  }

  getFormattedInputValue(value) {
    const { format } = this.props;
    return !!value && value._isAMomentObject ? value.format(format) : '';
  }

  componentDidUpdate(prevProps) {
    const { value, format } = this.props;

    const oldDateValue = moment(prevProps.value, format, true);
    const newDateValue = moment(value, format, true);
    const formattedOldDateValue = oldDateValue.format(format);
    const formattedNewDateValue = newDateValue.format(format);

    if (formattedOldDateValue !== formattedNewDateValue) {
      const isValid = newDateValue.isValid();
      const isDateValid = isValid || this.checkIfRangeIsValid(newDateValue);
      const isRangeValid = isValid && this.checkIfRangeIsValid(newDateValue);

      this.setState({
        selectedDate: newDateValue,
        isDateValid,
        isRangeValid,
        invalidMessage: this.getInvalidMessage(newDateValue, {
          isDateValid,
          isRangeValid
        }),
        // se a data for passada é valida, entao o valor do input é a data formatada.
        // se a data for invalida, entao o valor é o que está no state.
        inputDate: isValid ? formattedNewDateValue : this.state.inputDate
      });
    }
  }

  formatDate(date = new Date()) {
    const { format } = this.props;
    return moment(date).format(format);
  }

  onChangeDateHandler(date) {
    this.updateStateFromDialog(date, this.props.onChange);
  }

  onCloseDialogHandler(date) {
    this.updateStateFromDialog(date, this.props.onClose);
  }

  updateStateFromDialog(date, fn) {
    const { format } = this.props;
    const inputDate = date ? moment(date).format(format) : '';

    this.setState({
      inputDate,
      selectedDate: date,
      isRangeValid: true,
      isDateValid: true,
      invalidMessage: null,
      isDialogOpen: false
    });

    if (fn) {
      fn({
        name: this.dateInput.name,
        isRangeValid: true,
        isDateValid: true,
        value: date
      });
    }
  }

  onClickIconHandler() {
    console.log('clicekd');
    const { disabled } = this.props;

    if (!disabled) {
      this.setState({ isDialogOpen: true });
    }
  }

  onBlurInputHandler() {
    const { onBlur } = this.props;
    const { isRangeValid, isDateValid } = this.state;

    if (onBlur) {
      onBlur({
        name: this.dateInput.name,
        isRangeValid,
        isDateValid,
        value: moment(this.dateInput.value, 'DD/MM/YYYY', true)
      });
    }
  }

  async onChangeInputHandler(ev) {
    const { onChange } = this.props;
    const { name, value } = ev.target;

    // update input value
    await this.setState({ inputDate: value });

    const date = moment(value, 'DD/MM/YYYY', true);
    const isDateValid = date.isValid() || this.checkIfRangeIsValid(date);
    const isRangeValid = date.isValid() && this.checkIfRangeIsValid(date);

    await this.setState({
      isDateValid,
      isRangeValid,
      selectedDate: date.isValid() ? date : value,
      invalidMessage: this.getInvalidMessage(date, {
        isDateValid,
        isRangeValid
      })
    });

    if (onChange) {
      onChange({
        name,
        isDateValid,
        isRangeValid,
        value: date
      });
    }
  }

  checkIfRangeIsValid(date) {
    const { minDate, maxDate } = this.props;
    minDate.setHours(0, 0, 0, 0);
    maxDate.setHours(0, 0, 0, 0);

    return (
      minDate.getTime() <= date.toDate().getTime() && maxDate.getTime() >= date.toDate().getTime()
    );
  }

  getInvalidMessage(date, { isDateValid, isRangeValid }) {
    const {
      invalidDateMessage,
      invalidMaxDateMessage,
      invalidMinDateMessage,
      minDate,
      maxDate
    } = this.props;

    if (!isDateValid && date._i.replace(/[^0-9]/g, '').length === 8) return invalidDateMessage;

    if (!isRangeValid) {
      if (date.toDate() > maxDate) return invalidMaxDateMessage;
      if (date.toDate() < minDate) return invalidMinDateMessage;
    }

    return null;
  }

  renderIcon() {
    const { isLoading } = this.props;

    if (isLoading) return <CircularProgress />;

    return (
      <CalendarIcon
        style={{ cursor: 'pointer', zIndex: 10 }}
        alt=""
        onClick={this.onClickIconHandler}
      />
    );
  }

  renderInput() {
    const { isRangeValid, isDateValid, invalidMessage, inputDate } = this.state;
    const { label, message, errorMessage, hasError, disabled } = this.props;

    return (
      <InputWrapper hasError={hasError || !isDateValid || !isRangeValid} disabled={disabled}>
        <label>{label}</label>
        {errorMessage || invalidMessage || message ? (
          <label>{errorMessage || invalidMessage || message}</label>
        ) : null}

        <Fragment>
          <GenericInput
            {...this.props}
            inputRef={input => {
              this.dateInput = input;
            }}
            onChange={this.onChangeInputHandler}
            onBlur={this.onBlurInputHandler}
            value={inputDate}
            mask="99/99/9999"
          />

          {this.renderIcon()}
        </Fragment>
      </InputWrapper>
    );
  }

  onCloseDialogHandler(date) {
    const { format, onClose } = this.props;
    const inputDate = date ? moment(date).format(format) : '';

    this.setState({
      inputDate,
      selectedDate: date,
      isRangeValid: true,
      isDateValid: true,
      invalidMessage: null,
      isDialogOpen: false
    });

    if (onClose) {
      onClose({
        name: this.dateInput.name,
        isRangeValid: true,
        isDateValid: true,
        value: date
      });
    }
  }

  render() {
    const { selectedDate } = this.state;
    const { cancelLabel, format, minDate, maxDate } = this.props;

    return (
      <Fragment>
        {this.renderInput()}

        <DatePickerDialog
          open={this.state.isDialogOpen}
          cancelLabel={cancelLabel}
          selectedDate={!!selectedDate ? moment(selectedDate, format).toDate() : null}
          onChange={this.onChangeDateHandler}
          onClose={this.onCloseDialogHandler}
          minDate={minDate}
          maxDate={maxDate}
        />
      </Fragment>
    );
  }
}

DatepickerInput.defaultProps = {
  name: 'inputDate',
  type: 'text',
  placeholder: null,
  disabled: false,
  value: '',
  isLoading: false,
  message: null,
  hasError: false,
  errorMessage: null,
  invalidDateMessage: 'Data inválida',
  invalidMaxDateMessage: 'Data maior que a data máxima',
  invalidMinDateMessage: 'Data menor que a data mínima',
  minDate: new Date(1900, 0, 1),
  maxDate: new Date(2100, 0, 1),

  /* material picker props */
  cancelLabel: 'Fechar',
  clearable: false,
  clearLabel: 'Limpar',
  disableFuture: false,
  disableOpenOnEnter: false,
  disablePast: false,
  keyboard: true,
  format: 'DD/MM/YYYY'
};

DatepickerInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  message: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  invalidDateMessage: PropTypes.string,
  invalidMaxDateMessage: PropTypes.string,
  invalidMinDateMessage: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date)
};

export default DatepickerInput;
