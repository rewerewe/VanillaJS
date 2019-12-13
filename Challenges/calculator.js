// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const num = document.querySelectorAll(".js-num"),
  cal = document.querySelectorAll(".js-cal"),
  zero = document.querySelector(".js-zero"),
  reset = document.querySelector(".js-reset"),
  equal = document.querySelector(".js-equal"),
  result = document.querySelector(".js-result");

let processBar = [];
let calMode = 0;

function handleCalClick(event) {
  let currentVal = event.target.textContent;
  processBar.push(currentVal);

  if (currentVal !== "*") {
    calMode = 1; // Cal Mode
  } else {
    calMode = 2; // Square Mode
  }
}

function handleNumClick(event) {
  let currentVal = event.target.textContent;
  processBar.push(currentVal);

  // review
  if (calMode === 0) {
    // Number Only
    result.innerText = processBar.join("");
  } else if (calMode === 1) {
    // Cal Mode !== *
    result.innerText = currentVal;
    calMode = 0;
  } else {
    //Square Mode
    if (processBar[1] === "*" && processBar[0] === currentVal) {
      result.innerText = eval(processBar.join(""));
    } else {
      result.innerText = currentVal;
      calMode = 0;
    }
  }
}

function handleEqualClick(event) {
  result.innerText = eval(processBar.join(""));
  processBar = [];

  processBar[0] = result.innerText;
}

function handleResetClick(event) {
  result.innerText = 0;
  processBar = [];
}

function handleZeroClick(event) {
  let currentVal = event.target.textContent;
  processBar.push(currentVal);
  result.innerText += currentVal;
}

function loadCalculator() {
  zero.addEventListener("click", handleZeroClick);

  reset.addEventListener("click", handleResetClick);

  equal.addEventListener("click", handleEqualClick);

  num.forEach(event => {
    event.addEventListener("click", handleNumClick);
  });

  cal.forEach(event => {
    event.addEventListener("click", handleCalClick);
  });
}

function init() {
  loadCalculator();
}

init();
