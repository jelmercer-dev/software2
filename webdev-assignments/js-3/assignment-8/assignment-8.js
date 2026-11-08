"use strict";

function concat(array1) {

    let result = "";
    for (let i = 0; i < array1.length; i++) {
        result += array1[i];
    }
    return result;
}

let people = ["John", "Jane", "Mary", "Bob"];
document.querySelector("#target").innerHTML = concat(people);