const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const start = document.getElementById("start");
const result = document.getElementById("result");

start.addEventListener("click", () => {
  const firstNumber = Number(number1.value || number1.querySelector("input").value);
  const secondNumber = Number(number2.value || number2.querySelector("input").value);
  let answer;

  switch (operation.value || operation.querySelector("select").value) {
    case "add":
      answer = firstNumber + secondNumber;
      break;
    case "sub":
      answer = firstNumber - secondNumber;
      break;
    case "multi":
      answer = firstNumber * secondNumber;
      break;
    case "div":
      answer = firstNumber / secondNumber;
      break;
  }

  result.innerText = answer;
});