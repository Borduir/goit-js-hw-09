'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button');
const d = document.querySelector('[data-days]');
const h = document.querySelector('[data-hours]');
const m = document.querySelector('[data-minutes]');
const s = document.querySelector('[data-seconds]');
const timeSections = document.querySelectorAll('.field');
const timerBox = document.querySelector('.timer');
const values = document.querySelectorAll('.value');

//STYLES

timerBox.style.display = 'flex';

for (section of timeSections) {
  section.style.display = 'flex';
  section.style.flexDirection = 'column';
  section.style.marginLeft = '20px';
}

for (value of values) {
  value.style.color = 'tomato';
  value.style.fontSize = '45px';
}

//FUNCTIONS

startBtn.disabled = true;
let timeLeft = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = new Date();
    console.log(selectedDates[0]);
    console.log(currentTime);
    if (selectedDates[0] <= currentTime) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      timeLeft = selectedDates[0] - currentTime;
    }
  },
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

function addLeadingZero(array) {
  console.log(array);
  let i = 0;
  for (key in array) {
    let newValue = array[key];
    if (newValue < 10) {
      newValue = newValue.toString().padStart(2, '0');
    }
    values[i].textContent = newValue;
    console.log(values[i].textContent);

    i += 1;
  }
}

//ALTRNATIVE ADD_LEADING_ZER FUNCTION
// function addLeadingZero(array) {
//   if (array.days < 10) {
//     d.textContent = array.days.toString().padStart(2, '0');
//   } else {
//     d.textContent = array.days;
//   }
//   if (array.hours < 10) {
//     h.textContent = array.hours.toString().padStart(2, '0');
//   } else {
//     h.textContent = array.hours;
//   }
//   if (array.minutes < 10) {
//     m.textContent = array.minutes.toString().padStart(2, '0');
//   } else {
//     m.textContent = array.minutes;
//   }
//   if (array.seconds < 10) {
//     s.textContent = array.seconds.toString().padStart(2, '0');
//   } else {
//     s.textContent = array.seconds;
//   }
// }

// MAIN ACTION

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
  const timerId = setInterval(() => {
    const timeArray = convertMs(timeLeft);
    console.log(timeArray);
    addLeadingZero(timeArray);
    if (timeLeft < 1000) {
      clearInterval(timerId);
    }
    timeLeft -= 1000;
    console.log(`milliseconds left: ${timeLeft}`);
  }, 1000);
});
