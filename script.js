var seconds = 0;
var minutes = 0;
var hours = 0;
var selectedoption = "12hour";

function clock(){    //define the clock function
    var dhours = document.getElementById("hours");
    var dminutes = document.getElementById("minutes");
    var dseconds = document.getElementById("seconds");
    var ampm = document.getElementById("ampm");
    var optionsDropdown = document.getElementById("toggle-12-24");  //get the options dropdown

    var presentTime = new Date();  //get the current time
    seconds = String(presentTime.getSeconds()).padStart(2, '0');  //get the seconds
    minutes = String(presentTime.getMinutes()).padStart(2, '0');  //get the minutes
    hours = String(presentTime.getHours()).padStart(2, '0');  //get the hours   7 -> 07

    dhours.innerHTML = hours;  //set the hours in the html
    dminutes.innerHTML = minutes;  //set the minutes in the html
    dseconds.innerHTML = seconds ;  //set the seconds in the html

    if (!optionsDropdown.checked) {  //if the 12 hour option is selected
        if (hours > 12) {  //if the hours are greater than 12
            hours = hours - 12;  //subtract 12 from the hours
            ampm.innerHTML = "PM";  //set the ampm to PM
        } else {
            ampm.innerHTML = "AM";  //set the ampm to AM
        }
    }

}

clock();  //call the clock function
