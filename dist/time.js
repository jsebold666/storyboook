var time = {
  clone: function clone(d) {
    return new Date(d.getTime());
  },
  setHours: function setHours(d, hours) {
    var newDate = this.clone(d);
    newDate.setHours(hours);
    return newDate;
  },
  setMinutes: function setMinutes(d, minutes) {
    var newDate = this.clone(d);
    newDate.setMinutes(minutes);
    return newDate;
  }
};

export default time;
//# sourceMappingURL=time.js.map
