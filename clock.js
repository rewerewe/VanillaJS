const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"); 

function getTime(){
    // date는 class. zero to hero. 
    // 여기서는 date를 object라고 생각하기
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Basic Clock
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

    // 미니 if
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;

}  

function init() {
    // Always divided and conquer!
    getTime();
    setInterval(getTime, 1000);
}

init();
