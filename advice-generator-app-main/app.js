const button = document.querySelector(".dice");
const par = document.querySelector(".advice");
const spanID = document.querySelector("#adviceId");

button.addEventListener("click", async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const advice = data.slip.advice;
  par.innerText = advice;
  spanID.innerText = data.slip.id;
});
