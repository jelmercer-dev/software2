

const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

trigger.addEventListener("mouseover", () => {
  target.src = "img/picB.jpg";
});

trigger.addEventListener("mouseout", () => {
  target.src = "img/picA.jpg";
});