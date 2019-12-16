const USER_NAME = document.querySelector('#username');
const TODO = document.querySelector('#todo');

function setFocus() {
    if (form.classList.contains(SHOWING_CN)) {
        USER_NAME.focus();
    }

    if (toDoForm.classList.contains(SHOWING_CN)) {
        TODO.focus();
    }
}

function init() {
    // clock.js | Always divided and conquer!
    getTime();
    setInterval(getTime, 1000);

    // weather
    loadCoords();

    // bg.js
    paintImage();

    loadToDos();

    setFocus();
}

init();