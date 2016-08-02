function AlarmClock(time){
  this.time = time;
}

AlarmClock.prototype.checkTime = function () {
  var now = moment().format('HH:mm');
  console.log(now, this.time);

  return( now === this.time);
};


exports.alarmClockModule = AlarmClock;
