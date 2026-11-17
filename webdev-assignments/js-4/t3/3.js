const names = ["John", "Paul", "Jones"];

const list = document.getElementById("target");

names.forEach((name) => {
  list.appendChild(document.createElement("li")).innerHTML = name;
});