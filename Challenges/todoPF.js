const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    penToDoList = document.querySelector(".js-penToDoList"),
    finToDoList = document.querySelector(".js-finToDoList");

// const TODOS_LS = "toDos";
const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

// let toDos = [];
let penToDos = [];
let finToDos = [];

function moveToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const ul = li.parentNode;

    if (ul.className === 'js-penToDoList') {
        btn.innerText = "➖"
        finToDoList.appendChild(li);
    } else {
        btn.innerText = "✔️"
        penToDoList.appendChild(li);
        saveToDos(2, pinToDos);
    }
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    if (penToDoList.childElementCount > 0) {
        penToDoList.removeChild(li);
    }

    if (finToDoList.childElementCount > 0) {
        finToDoList.removeChild(li);
    }

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos(3);
}

function saveToDos(flag, toDos) {
    // localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

    if (flag == 1) {
        localStorage.setItem(PENDING_LS, JSON.stringify(toDos));
    } else if (flag == 2) {
        localStorage.setItem(FINISHED_LS, JSON.stringify(toDos));
    } else {
        localStorage.removeItem(PENDING_LS);
        localStorage.removeItem(FINISHED_LS);
    }
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const moveBtn = document.createElement("button");
    const span = document.createElement("span");
    // const newId = toDos.length + 1;
    const newId = new Date().getTime();

    span.innerText = text;
    moveBtn.innerText = "✔️"
    delBtn.innerText = "❌"
    moveBtn.addEventListener("click", moveToDo);
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(moveBtn);
    li.appendChild(delBtn);
    li.id = newId;
    penToDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    penToDos.push(toDoObj);
    saveToDos(1, penToDos);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(PENDING_LS);

    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
