import "./styles.css";

const clockContainer = document.querySelector(".js-clock"),
  clockTime = clockContainer.querySelector(".js-time");

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2019-12-24:00:00:00+0900");
  const nowDate = new Date();

  const xDay = xmasDay.getUTCDate() - nowDate.getUTCDate() - 1;
  const xHour = xmasDay.getUTCHours() - nowDate.getUTCHours() + 23;
  const xMin = xmasDay.getUTCMinutes() - nowDate.getUTCMinutes() + 59;
  const xSec = xmasDay.getUTCSeconds() - nowDate.getUTCSeconds() + 59;
  clockTime.innerText = `${xDay} 일 ${xHour} 시 ${xMin} 분 ${xSec} 초⭐`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
