function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

let intervalId = null;

function startColorSwitcher() {
  startButton.disabled = true;
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
}

function stopColorSwitcher() {
  startButton.disabled = false;
  clearInterval(intervalId);
  body.removeAttribute('style');
}

startButton.addEventListener('click', startColorSwitcher);
stopButton.addEventListener('click', stopColorSwitcher);
