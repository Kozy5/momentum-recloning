const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);
let toDos = [];
function savedToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo() {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savedToDo();
  li.remove();
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.newToDo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newToDoObj = {
    newToDo: toDoInput.value,
    id: Date.now(),
  };
  paintToDo(newToDoObj);
  toDos.push(newToDoObj);
  savedToDo();
  toDoInput.value = "";
}
toDoForm.addEventListener("submit", handleTodoSubmit);

if (savedToDos !== null) {
  const toDosParsing = JSON.parse(savedToDos);
  toDos = toDosParsing;
  savedToDo();
  toDos.forEach(paintToDo);
}
