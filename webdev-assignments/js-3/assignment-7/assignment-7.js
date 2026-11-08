"use strict";
function die(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let roll;
let sides = parseInt(prompt("How many sides?"));

while (roll !== sides) {
    roll = die(sides);
    let li = document.createElement("li");
    li.textContent = roll;
    document.querySelector("#target").appendChild(li);
}
