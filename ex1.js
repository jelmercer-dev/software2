"use strict";

let timerID = null;

function removeBox(evt){
let boxParent = evt.currentTarget.parentElement;
boxParent.removeChild(evt.currentTarget);
} 

function  timedAction(){
    let boxDiv = document.querySelector(".box");
    let newParagraph = document.createElement("p");

    newParagraph.innerText = "Box";
    newParagraph.setAttribute("class", "greenbox");
    newParagraph.addEventListener("click", removeBox);

    boxDiv.appendChild(newParagraph);
}

function startBoxing(){
    timerID = setInterval(timedAction, 500);
    document.querySelector(".box").innerHTML = "Start boxing...";
}

function stopBoxing(){
    clearInterval(timerID);
    document.querySelector(".box").innerHTML = "Stop boxing...";
}

let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");

startButton.addEventListener("click", startBoxing);
stopButton.addEventListener("click", stopBoxing);

let header = document.querySelector("#main-header");
header.innerText = "Page about Boxes";

let alsoHeader = document.getElementById("main-header");
console.log(alsoHeader);

let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

let paragraphsToo = document.getElementsByTagName("p");
console.log(paragraphsToo);