const range = document.querySelector('#jsRange'),
    selectNumber = document.querySelector('.js-selectNumber'),
    input = selectNumber.querySelector('input'),
    btn = selectNumber.querySelector('button'),
    selectResult = document.querySelector('.js-selectResult'),
    gameResult = document.querySelector('.js-gameResult');

let maxNum = document.querySelector('.js-maxNum');
let selectedMaxNum = 0;
let machineNum = 0;

function playRandomGame() {
    let youNum = input.value;

    if (youNum <= selectedMaxNum && youNum > 0 && machineNum <= selectedMaxNum && machineNum > 0) {
        selectResult.innerText = `You choose : ${youNum}, The machine choose : ${machineNum}.`

        if (youNum > machineNum) {
            gameResult.innerText = `YOU WIN 🎉🎉🎉`;
        } else if (youNum < machineNum) {
            gameResult.innerText = `MACHINE WIN 💻💻💻`;
        } else if (youNum = machineNum) {
            gameResult.innerText = `It's a tie 😉. Try again.`;
        }
    } else if (youNum > selectedMaxNum || youNum < 0) {
        selectResult.innerText = `🚨 0 에서 ${selectedMaxNum} 사이의 숫자로 입력해주세요!🤨 `;
        input.value = "";
    }
}

function getRandom() {
    machineNum = Math.floor(Math.random() * selectedMaxNum);
    if (machineNum < selectedMaxNum) {
        playRandomGame();
    }
}

function handleInputEnter(event){

    if (event.keyCode === 13){
        getRandom();
    } 
}

function handleRangeChange(event) {
    selectedMaxNum = event.target.value;
    maxNum.innerText = selectedMaxNum;
    input.addEventListener("keydown", handleInputEnter);
    btn.addEventListener("click", getRandom);
}

function init() {
    range.addEventListener('input', handleRangeChange);
}

init();