var seconds = 0, minutes = 0, hours = 0, selectedOption = "12hour";
function clock() {
  var dhours = document.getElementById("hours");
  var dminutes = document.getElementById("minutes");
  var dseconds = document.getElementById("seconds");
  var ampm = document.getElementById("ampm");
  var optionsDropdown = document.getElementById("toggle-12-24");

  var presentTime = new Date();
  var seconds = String(presentTime.getSeconds()).padStart(2, '0');
  var minutes = String(presentTime.getMinutes()).padStart(2, '0');
  var hours = String(presentTime.getHours()).padStart(2, '0');

  dhours.innerHTML = hours;
  dminutes.innerHTML = minutes;
  dseconds.innerHTML = seconds;

  if (!optionsDropdown.checked) {
    if (hours >= 12) { 
      dhours.innerHTML = hours - 12;
      ampm.innerHTML = "PM";
    }
    else {
      ampm.innerHTML = "AM";
    }
    ampm.style.display = "inline";
    dminutes.innerHTML = minutes;
    dseconds.innerHTML = seconds;
  }
  else {
    dhours.innerHTML = hours;
    ampm.style.display = "none";
  }
}
setInterval(clock, 1000);

const displayDate = date => {
  const dateOutput = document.getElementById("date-text"),
    dayNumber = date.getDate();
  dateOutput.innerHTML = `${weekDay(date)}, ${monthName(date)} ${dayNumber}`;
}
const weekDay = date => {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dateIndex = date.getDay();
  return weekDays[dateIndex];
}
const monthName = date => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthIndex = date.getMonth();
  return monthNames[monthIndex];
}
displayDate(new Date());

var year = currentDate.getFullYear();
var month = currentDate.getMonth();      // Note: Months are zero-based (0 = January, 11 = December)
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();
