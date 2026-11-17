const button = document.createElement("button");
button.textContent = "Click me";
button.addEventListener("click", (evt) => {
  alert(`Button Clicked`);
});
document.body.appendChild(button);
