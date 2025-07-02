let [hours, minutes, seconds] = [0, 0, 0];
let interval = null;
const timerDisplay = document.getElementById("time");
const splitContainer = document.getElementById("splitTimes");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (interval !== null) return;
  interval = setInterval(stopwatch, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  splitContainer.innerHTML = '';
}

function split() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  const splitTime = `${h}:${m}:${s}`;
  const div = document.createElement("div");
  div.className = "split-time";
  div.innerText = splitTime;
  splitContainer.appendChild(div);
}

updateDisplay(); // Initialize display
