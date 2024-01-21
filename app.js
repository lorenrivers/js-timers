console.log("Hello!");

document.getElementById("message").style.visibility = "hidden";

function displayMessage() {
  document.getElementById("message").style.visibility = "visible";
  setTimeout(function () {
    document.getElementById("message").style.visibility = "hidden";
  }, 5000);
}

const timeButton = document.getElementById("timer-btn");
timeButton.addEventListener("click", displayMessage);

//INTERVAL BUTTON CODE
let time = 0;

const intButton = document.getElementById("interval-btn");
intButton.addEventListener("click", myTimer);

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  time++;
  document.getElementById("timer").innerHTML = time;
}

const intButton2 = document.getElementById("interval-btn");
intButton2.addEventListener("click", myStopFunction);

function myStopFunction() {
  clearInterval(myInterval);
}
