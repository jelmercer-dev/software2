document.querySelector("h1").textContent = "My grades";

const getGrades= async () => {
    const response = await fetch("/api/grades")
    const data = await response.json();

    console.log("response",data);
    console.log("data",data);

    const ul = document.querySelector("ul");

    for (let grade of data) {
        console.log("grade", grade);

        const li = `<li>${grade}</li>`
        ul.innerHTML += li;
        // ul.innerHTML = ul.innerHTML + li;
    }
}

getGrades(); 