import moment from 'moment';
import numeral from 'numeral';
import localization from 'moment/locale/pt-br';

export function formatDate(date, format = 'DD/MM/YY') {
  return date !== null && date !== undefined ? moment(date).format(format) : null;
}

export function formatRange(startDate, endDate) {
  const desde = moment(startDate);
  const ate = moment(endDate);
  return `${moment(desde)
    .locale('pt-br', localization)
    .format('DD MMM YYYY')} - ${moment(ate)
    .locale('pt-br', localization)
    .format('DD MMM YYYY')}`;
}

export function formatCurrency(value) {
  return value !== null && value !== undefined ? numeral(value).format('0,0.00') : null;
}
