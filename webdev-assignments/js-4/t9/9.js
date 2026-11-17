const calculation = document.getElementById("calculation");
const start = document.getElementById("start");
const result = document.getElementById("result");
const operators = ["+", "-", "*", "/"];

start.addEventListener("click", () => {
  const expression = calculation.value;
  let operator;

  for (const candidate of operators) {
    if (expression.includes(candidate)) {
      operator = candidate;
      break;
    }
  }

  const numbers = expression.split(operator);
  const firstNumber = Number(numbers[0]);
  const secondNumber = Number(numbers[1]);
  let answer;

  switch (operator) {
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "*":
      answer = firstNumber * secondNumber;
      break;
    case "/":
      answer = firstNumber / secondNumber;
      break;
  }

  result.textContent = answer;
});