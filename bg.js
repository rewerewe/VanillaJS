const body = document.querySelector("body");

const IMG_NUMBER = 10;

function handleImgLoad() {
    console.log('finished loading');
}

function paintImage() {
    const imgNumber = genRandom();

    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);

    // table listener를 이미지화 하기 위해 even listener 를 연결
    // -> API 를 연결했다면 작동되었을 EVENT
    // image.addEventListener("loadend", handleImgLoad)
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
/*
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init(); */