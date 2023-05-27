const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let colorIntervalId = null;

refs.btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function colorBody() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startColorInterval() {
  colorIntervalId = setInterval(colorBody, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function stopColorInterval() {
  clearInterval(colorIntervalId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

refs.btnStop.addEventListener('click', stopColorInterval);
refs.btnStart.addEventListener('click', startColorInterval);


startButton.addEventListener('click', startColorSwitcher);
stopButton.addEventListener('click', stopColorSwitcher);
