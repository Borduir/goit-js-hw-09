function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getBackgroundColor = () => {
  body.style.backgroundColor = getRandomHexColor();
};

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId;

startBtn.addEventListener('click', () => {
  timerId = setInterval(getBackgroundColor, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;

  clearInterval(timerId);
});
