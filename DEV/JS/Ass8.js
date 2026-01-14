let body = document.querySelector("body");
let button = document.createElement("button");
let input = document.createElement("input");
let h1 = document.createElement("h1");
let p = document.createElement("p");


button.innerText = "Click me";
body.appendChild(h1);
body.appendChild(p);
body.appendChild(button);
body.appendChild(input);

h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration="underline";
p.innerHTML="Apna College <strong>Delta</strong> Practice"

input.placeholder = "username";
button.setAttribute("id", "btn");

button = document.querySelector("#btn");

button.setAttribute("backgroundColor", "blue");
button.setAttribute("color", "white");

button.innerText = "Click Me";
body.appendChild(button);
body.appendChild(input);

input.placeholder = "username";
button.setAttribute("id", "btn");

button = document.querySelector("#btn");
button.style.backgroundColor = "blue";
button.style.color = "white";
