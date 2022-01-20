const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const renamingForm = document.querySelector("#renaming-form");
const renamingButton = document.querySelector("#renaming-form button");
const USERNAME_KEY = "username";
let savedName = localStorage.getItem(USERNAME_KEY);

function greetingFunc(userName) {
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  greeting.innerText = `반갑습니다 ${userName} 님!`;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  greetingFunc(userName);
}
loginForm.addEventListener("submit", handleLoginSubmit);

if (savedName !== null) {
  greeting.classList.remove("hidden");
  greeting.innerText = `반갑습니다 ${savedName} 님!`;
} else {
  loginForm.classList.remove("hidden");
}

function onrenaming() {
  localStorage.removeItem(USERNAME_KEY);
}
renamingButton.addEventListener("click", onrenaming);
