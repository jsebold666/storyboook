const time = {
  clone(d) {
    return new Date(d.getTime());
  },

  setHours(d, hours) {
    const newDate = this.clone(d);
    newDate.setHours(hours);
    return newDate;
  },

  setMinutes(d, minutes) {
    const newDate = this.clone(d);
    newDate.setMinutes(minutes);
    return newDate;
  }
};

export default time;
