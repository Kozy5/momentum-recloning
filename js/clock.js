let nowClock = () => {
  const clock = document.querySelector("#clock");
  const date = new Date();
  const getSeconds = String(date.getSeconds()).padStart(2, "0");
  const getMinutes = String(date.getMinutes()).padStart(2, "0");
  const getHours = String(date.getHours()).padStart(2, "0");
  clock.innerText = `${getHours}:${getMinutes}:${getSeconds}`;
};
setInterval(nowClock, 0);
setInterval(nowClock, 1000);
