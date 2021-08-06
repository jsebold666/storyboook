var dateLocales = {
  pt: {
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdays: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    weekdaysLetter: []
  }
};

var LOCALE_DEFAULT = 'pt';

var dateUtils = {
  dateOutOfRange: function dateOutOfRange(date, minDate, maxDate) {
    return minDate && !(date >= minDate) || maxDate && !(date <= maxDate);
  },
  getFirstWeekDay: function getFirstWeekDay(d) {
    return this.getFirstDayOfMonth(d).getDay();
  },
  getDaysInMonth: function getDaysInMonth(d) {
    var resultDate = this.getFirstDayOfMonth(d);
    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);
    return resultDate.getDate();
  },
  getFullMonth: function getFullMonth(d) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOCALE_DEFAULT;

    var month = d.getMonth();
    var l = dateLocales[locale];
    return l.months[month];
  },
  getShortMonth: function getShortMonth(d) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOCALE_DEFAULT;

    var month = d.getMonth();
    var l = dateLocales[locale];
    return l.monthsShort[month];
  },
  getFirstDayOfMonth: function getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  },
  getFullDayOfWeek: function getFullDayOfWeek(day) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOCALE_DEFAULT;

    var l = dateLocales[locale];
    return l.weekdays[day];
  },
  getDayOfWeekLetter: function getDayOfWeekLetter(day) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOCALE_DEFAULT;

    var l = dateLocales[locale];
    return l.weekdaysLetter[day] || this.getFullDayOfWeek(day, locale).charAt(0);
  },
  getShortDayOfWeek: function getShortDayOfWeek(day) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOCALE_DEFAULT;

    var l = dateLocales[locale];
    return l.weekdaysShort[day];
  },
  closestDate: function closestDate(to, date1, date2) {
    var toTime = to.getTime();

    var diff1 = Math.abs(toTime - date1.getTime());
    var diff2 = Math.abs(toTime - date2.getTime());

    return diff1 < diff2 ? date1 : date2;
  },
  formatDate: function formatDate(date) {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  },
  cloneAsDate: function cloneAsDate(d) {
    var clonedDate = new Date(d.getTime());
    clonedDate.setHours(0, 0, 0, 0);
    return clonedDate;
  },
  isDateObject: function isDateObject(d) {
    return d instanceof Date;
  },
  addDays: function addDays(d, days) {
    var newDate = this.cloneAsDate(d);
    newDate.setDate(d.getDate() + days);
    return newDate;
  },
  addMonths: function addMonths(d, months) {
    var newDate = this.cloneAsDate(d);
    newDate.setMonth(d.getMonth() + months, 1);
    return newDate;
  },
  addYears: function addYears(d, years) {
    var newDate = this.cloneAsDate(d);
    newDate.setFullYear(d.getFullYear() + years);
    return newDate;
  },
  setDay: function setDay(d, day) {
    var newDate = this.cloneAsDate(d);
    newDate.setDate(day);
    return newDate;
  },
  setMonth: function setMonth(d, month) {
    var newDate = this.cloneAsDate(d);
    newDate.setMonth(month);
    return newDate;
  },
  setYear: function setYear(d, year) {
    var newDate = this.cloneAsDate(d);
    newDate.setFullYear(year);
    return newDate;
  }
};

export default dateUtils;
//# sourceMappingURL=date.js.map
