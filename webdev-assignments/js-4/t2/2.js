document.getElementById("target").appendChild(document.createElement("li"));
document.getElementById("target").lastChild.innerHTML = "First item";
document.getElementById("target").appendChild(document.createElement("li"));
document.getElementById("target").lastChild.innerHTML = "Second item";
document.getElementById("target").lastChild.classList.add("my-item");
document.getElementById("target").appendChild(document.createElement("li"));
document.getElementById("target").lastChild.innerHTML = "Third item";
