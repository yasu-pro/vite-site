import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
const number1 = document.getElementById("js-number1");
const number2 = document.getElementById("js-number2");
const total = document.getElementById("js-total");
const btn = document.getElementById("js-btn");

function sum(a, b) {
  const result = a + b;
  return result;
}

btn.addEventListener("click", () => {
  const sumResult = sum(number1, number2);
  console.log(sumResult);
  total.textContent = sumResult;
});
