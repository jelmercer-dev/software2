//Get inputs, result paragraph and buttons
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultOutput = document.getElementById("result");
const buttons = document.querySelectorAll("[data-operation]");

// Symbol shown in the result text for each endpoint
const symbols = {
  plus: "+",
  minus: "−",
  multiplication: "×",
};

// Address of the Flask backend
const BACKEND_URL = "";

// calculate operation
async function calculate(operation) {
  //Set numbers from inputs as parameters to the request
  const params = new URLSearchParams({
    number1: number1Input.value,
    number2: number2Input.value,
  });
  // Create url, if the operation is minus, use path parameters
  //otherwise use request parameters
  const url =
    operation === "minus"
      ? `${BACKEND_URL}/minus/${encodeURIComponent(number1Input.value)}/${encodeURIComponent(number2Input.value)}`
      : `${BACKEND_URL}/${operation}?${params}`;

  //Make a request to the URL
  try {
    const response = await fetch(url);

    let data;
    
    try {
      data = await response.json();
    } catch {
      resultOutput.textContent = "Error has occurred :/"
      return;
    }

    if (response.ok) {
        resultOutput.textContent = `${data.number1} ${symbols[operation]} ${data.number2} = ${data.result}`
    } else {
        resultOutput.textContent = data.message;
    }
  } catch {
    resultOutput.textContent = "Could not reach the server"
  }
}

// Add the event handlers to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button.dataset.operation));
});