var AlarmClock = require('./../js/alarm-clock.js').alarmClockModule;

$(document).ready(function(){
  $("#alarm-form").submit(function(event){
    event.preventDefault();
    var alarmTime = $("#alarm-time").val();
    var newAlarm = new AlarmClock(alarmTime);

    $(".alarm").append("<h3> alarm set to "+ alarmTime + "</h3>");

    var setOff = false

    var loop = setInterval(function() {
      if (newAlarm.checkTime()){
        setOff = true;
        alert("alarm is ringing!!");
        clearInterval(loop);
      }
    },1000);
  });
});
