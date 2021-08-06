import dateLocales from '../../constants/dateLocales';
import LOCALE_DEFAULT from '../../constants/locale';

const dateUtils = {
  dateOutOfRange(date, minDate, maxDate) {
    return (minDate && !(date >= minDate)) || (maxDate && !(date <= maxDate));
  },

  getFirstWeekDay(d) {
    return this.getFirstDayOfMonth(d).getDay();
  },

  getDaysInMonth(d) {
    const resultDate = this.getFirstDayOfMonth(d);
    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);
    return resultDate.getDate();
  },

  getFullMonth(d, locale = LOCALE_DEFAULT) {
    const month = d.getMonth();
    const l = dateLocales[locale];
    return l.months[month];
  },

  getShortMonth(d, locale = LOCALE_DEFAULT) {
    const month = d.getMonth();
    const l = dateLocales[locale];
    return l.monthsShort[month];
  },

  getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  },

  getFullDayOfWeek(day, locale = LOCALE_DEFAULT) {
    const l = dateLocales[locale];
    return l.weekdays[day];
  },

  getDayOfWeekLetter(day, locale = LOCALE_DEFAULT) {
    const l = dateLocales[locale];
    return l.weekdaysLetter[day] || this.getFullDayOfWeek(day, locale).charAt(0);
  },

  getShortDayOfWeek(day, locale = LOCALE_DEFAULT) {
    const l = dateLocales[locale];
    return l.weekdaysShort[day];
  },

  closestDate(to, date1, date2) {
    const toTime = to.getTime();

    const diff1 = Math.abs(toTime - date1.getTime());
    const diff2 = Math.abs(toTime - date2.getTime());

    return diff1 < diff2 ? date1 : date2;
  },

  formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  },

  cloneAsDate(d) {
    const clonedDate = new Date(d.getTime());
    clonedDate.setHours(0, 0, 0, 0);
    return clonedDate;
  },

  isDateObject(d) {
    return d instanceof Date;
  },

  addDays(d, days) {
    const newDate = this.cloneAsDate(d);
    newDate.setDate(d.getDate() + days);
    return newDate;
  },

  addMonths(d, months) {
    const newDate = this.cloneAsDate(d);
    newDate.setMonth(d.getMonth() + months, 1);
    return newDate;
  },

  addYears(d, years) {
    const newDate = this.cloneAsDate(d);
    newDate.setFullYear(d.getFullYear() + years);
    return newDate;
  },

  setDay(d, day) {
    const newDate = this.cloneAsDate(d);
    newDate.setDate(day);
    return newDate;
  },

  setMonth(d, month) {
    const newDate = this.cloneAsDate(d);
    newDate.setMonth(month);
    return newDate;
  },

  setYear(d, year) {
    const newDate = this.cloneAsDate(d);
    newDate.setFullYear(year);
    return newDate;
  }
};

export default dateUtils;
