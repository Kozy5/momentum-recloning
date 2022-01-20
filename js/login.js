const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const renamingButton = document.querySelector("#renaming-form button");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const savedName = localStorage.getItem(USERNAME_KEY);

function paintGreeting2(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `반갑습니다 ${userName} 님!`;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting2(userName);
}
loginForm.addEventListener("submit", handleLoginSubmit);

if (savedName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreeting2(savedName);
}

function onrenaming() {
  localStorage.removeItem(USERNAME_KEY);
}
renamingButton.addEventListener("click", onrenaming);
