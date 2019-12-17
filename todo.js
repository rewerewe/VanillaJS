const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const textSpan = document.createElement("span");
  const dateSpan = document.createElement("span");
  const newId = toDos.length + 1;
  const writtenDate = clockTitle.textContent;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  textSpan.innerText = text;
  dateSpan.innerText = ` | ${writtenDate}`;
  li.appendChild(textSpan);
  li.appendChild(dateSpan);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    date: writtenDate,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleToDoFormSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
/* 
function loadTodoForm() {
  toDoForm.addEventListener("submit", handleSubmit);
}
 */
function loadToDos() {
  // userName 없다면 toDolist 출력되지 않음.
  if (localStorage.getItem(USER_LS) === null) {
    return;
  }

  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
/*
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
 */