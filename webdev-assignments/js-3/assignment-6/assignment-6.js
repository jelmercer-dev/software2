    "use strict";
    function die() {
        return Math.floor(Math.random() * 6) + 1;
    }
    let ul = document.querySelector("#target");
    let roll;
    
    while (roll !== 6) {
        roll = die();
        let li = document.createElement("li");
        li.textContent = roll;
        ul.appendChild(li);
    }