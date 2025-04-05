var newyear = setInterval(function () {
var coundDownDate = new Date("April 14, 2025 03:21:00 AM ").getTime();
  var now = new Date().getTime();
  var distance = coundDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

var punyakalaya = setInterval(function () {
  var coundDownDate = new Date("April 13, 2025 08:57:00 PM ").getTime();
  var now = new Date().getTime();
  var distance = coundDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("daysPunya").innerHTML = days;
  document.getElementById("hoursPunya").innerHTML = hours;
  document.getElementById("minutesPunya").innerHTML = minutes;
  document.getElementById("secondsPunya").innerHTML = seconds;

  if(distance<0){
    clearInterval(x);
    document.getElementById("daysPunya").innerHTML = "00";
    document.getElementById("hoursPunya").innerHTML = "00";
    document.getElementById("minutesPunya").innerHTML = "00";
    document.getElementById("secondsPunya").innerHTML = "00";
  }

}, 1000);

var aharaPisima = setInterval(function () {
  var coundDownDate = new Date("April 14, 2025 04:04:00 AM ").getTime();
  var now = new Date().getTime();
  var distance = coundDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("daysFood").innerHTML = days;
  document.getElementById("hoursFood").innerHTML = hours;
  document.getElementById("minutesFood").innerHTML = minutes;
  document.getElementById("secondsFood").innerHTML = seconds;

  if(distance<0){
    clearInterval(x);
    document.getElementById("daysFood").innerHTML = "00";
    document.getElementById("hoursFood").innerHTML = "00";
    document.getElementById("minutesFood").innerHTML = "00";
    document.getElementById("secondsFood").innerHTML = "00";
  }

}, 1000);

var wadaAllima = setInterval(function () {
  var coundDownDate = new Date("April 14, 2025 06:44:00 AM ").getTime();
  var now = new Date().getTime();
  var distance = coundDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("daysWada").innerHTML = days;
  document.getElementById("hoursWada").innerHTML = hours;
  document.getElementById("minutesWada").innerHTML = minutes;
  document.getElementById("secondsWada").innerHTML = seconds;

  if(distance<0){
    clearInterval(x);
    document.getElementById("daysWada").innerHTML = "00";
    document.getElementById("hoursWada").innerHTML = "00";
    document.getElementById("minutesWada").innerHTML = "00";
    document.getElementById("secondsWada").innerHTML = "00";
  }

}, 1000);

var hisaThel = setInterval(function () {
  var coundDownDate = new Date("April 16, 2025 09:04:00 AM ").getTime();
  var now = new Date().getTime();
  var distance = coundDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("daysThel").innerHTML = days;
  document.getElementById("hoursThel").innerHTML = hours;
  document.getElementById("minutesThel").innerHTML = minutes;
  document.getElementById("secondsThel").innerHTML = seconds;

  if(distance<0){
    clearInterval(x);
    document.getElementById("daysThel").innerHTML = "00";
    document.getElementById("hoursThel").innerHTML = "00";
    document.getElementById("minutesThel").innerHTML = "00";
    document.getElementById("secondsThel").innerHTML = "00";
  }

}, 1000);

var goingTOwork = setInterval(function () {
  var coundDownDate = new Date("April 17, 2025 09:03:00 AM ").getTime();
  var now = new Date().getTime();
  var distance = coundDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("daysJob").innerHTML = days;
  document.getElementById("hoursJob").innerHTML = hours;
  document.getElementById("minutesJob").innerHTML = minutes;
  document.getElementById("secondsJob").innerHTML = seconds;

  if(distance<0){
    clearInterval(x);
    document.getElementById("daysJob").innerHTML = "00";
    document.getElementById("hoursJob").innerHTML = "00";
    document.getElementById("minutesJob").innerHTML = "00";
    document.getElementById("secondsJob").innerHTML = "00";
  }

}, 1000);
