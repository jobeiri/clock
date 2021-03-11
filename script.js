/*
1. JavaScript Date objects represent a single moment in time in a platform-independent format. 
   Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
2. setTimeout(handler, timeout)
   setInterval(handler, timeout)
   The only differenc is,
   setTimeout() triggers the handler only once while
   setInterval() keeps triggering handler regularly after the given interval of time. (unless you tell it to stop).
*/

const noon = 12;
const oneSeconds = 1000;

const showCurrentTime = function () {
  const clock = document.querySelector(".clock");
  const currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  // let milliseconds = currentTime.getMilliseconds();
  // Ternary operator
  const meridian = hours >= noon ? "PM" : "AM";

  // Set hours
  if (hours > noon) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  // Set minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const clockTime = `${hours}:${minutes}:${seconds} ${meridian}!`;
  clock.innerText = clockTime;
};

setInterval(showCurrentTime, oneSeconds);
