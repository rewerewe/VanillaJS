const temp = document.querySelector(".js-temperature"),
    loc = document.querySelector(".js-location");

const API_KEY = '6e2fb42abe8c4d1c9da9f192753f1b59';
const COORDS = 'coords';

// JS 이용해서 특정 URL 호출하기 (새로고침 없이 데이터 가져오기)
function getWeather(lat, lng){
    // fetch를 기다린 후 다음작업을 지시하기 위해 .then을 사용:서버로부터 데이터가 들어올 때까지 기다림
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(reponse){
        return reponse.json() 
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;

        temp.innerText = `${temperature}°`;
        loc.innerText =  `${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
// 좌표를 가져오는데 성공했을 때 처리하는 함수 
function handleGeoSucces(position){

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        // network 패널은 request한 내용을 보여준다. 
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
