// 3.3 Saving the userName
// localStorage
const form = document.querySelector(".js-form"),
    username = form.querySelector("#username"),
    greeting = document.querySelector(".js-greetings");

// USER_LocalStoage,SHOWING_ClassName 
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const currentValue = username.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleFormSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Have a good day, ${text}.`; // 'Hello ' + text;
    toDoForm.classList.add(SHOWING_CN);
    toDoForm.addEventListener("submit", handleToDoFormSubmit);
    setFocus();
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)

    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}