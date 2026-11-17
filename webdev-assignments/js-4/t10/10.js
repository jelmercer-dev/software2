  const form = document.querySelector("form");
  const fname = document.querySelector("input[name=firstname]");
  const lname = document.querySelector("input[name=lastname]");
  const p = document.getElementById("target");

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    p.innerText = `Your name is ${fname.value} ${lname.value}`;
});