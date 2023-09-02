// Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const inputEl = document.querySelector("#datetime-picker");
const startBTN = document.querySelector("button[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");
const timerEl = document.querySelector(".timer");
const bodyEl = document.querySelector('body');

bodyEl.style.backgroundColor = "#00FF7F";
timerEl.style.cssText = "margin-top: 100px; justify-content: center; display: flex; gap: 30px; font-size: 26px";
inputEl.style.backgroundColor = "ffffff";
inputEl.style.cssText = "display: block; margin-left: auto; margin-right: auto; text-align: center; justify-content: center; font-size: 26px; color: green";
startBTN.style.cssText = "display: block; margin-top: 30px; margin-left: auto; margin-right: auto; text-align: center; font-size: 26px";


startBTN.disabled = true;
const currentDate = new Date();




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // const selectedDate = selectedDates[0];
    console.log(selectedDates[0]);
    if (selectedDates[0] < currentDate) {
        return window.alert("Please choose a date in the future");
        } else {
          startBTN.disabled = false;
    
      // startTimer()
      
//  const date = Date.now();
      // console.log(currentDate.getTime());
      // const delta = selectedDates[0] - currentDate;
      // console.log(delta);
      // console.log(convertMs(delta));
    };
   },
};
 
flatpickr(inputEl, options);

startBTN.addEventListener("click", startTimer);


function startTimer() {

  const selectedDate = new Date(inputEl.value);
  
  intervalId = setInterval(() => {
    let currentDate = new Date();
    let delta = selectedDate.getTime() - currentDate.getTime();
      
    if (delta <= 0) {
      clearInterval(intervalId);
    }

    setTheTimer(delta)
      
    }, 1000);
  };

   

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
};


function setTheTimer(delta) {
    const { days, hours, minutes, seconds } = convertMs(delta);
    daysEl.textContent = `${addLeadingZero(days)}`;
    hoursEl.textContent = `${addLeadingZero(hours)}`;
    minutesEl.textContent = `${addLeadingZero(minutes)}`;
    secondsEl.textContent = `${addLeadingZero(seconds)}`;
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
