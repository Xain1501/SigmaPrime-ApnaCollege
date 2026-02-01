// q1 -> understnad the js events

// let label= document.getElementById("Ques");

// label.addEventListener("mouseout", () => {
// label.innerText = "mouseout";
// label.style.color = "red";
// label.style.textDecoration="underline";
//   console.log("Button loaded!");
//  });
// label.addEventListener("keypress", () => {
// label.innerText = "key press";
// label.style.color = "purple";
// label.style.textDecoration="underline";
//   console.log("key pressed!");
//  });
// label.addEventListener("scroll", () => {
// label.innerText = " scroll";
// label.style.color = "purple";
// label.style.textDecoration="wavy";
//   console.log("scrolled!");
//  });

// label.addEventListener("load", () => {
// label.innerText = "load";
// label.style.color = "green";
// label.style.textDecoration="underline";
//   console.log("para loaded!");
//  });

// q2
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "green";

  console.log("btn workd!");
});

//  q3-> Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let body = document.querySelector("body");

let h2 = document.createElement("h2");
body.appendChild(h2);

let input = document.createElement("input");
body.appendChild(input);

input.setAttribute("type", "text");
input.placeholder = "Enter your name";

// input.addEventListener("input", (event) => {
//   let currentValue = event.target.value;
//   const ch = currentValue.charCodeAt(currentValue.length - 1);

//   if ((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122)) {
//     h2.textContent = currentValue;
//   } else {
//     currentValue = currentValue.substring(0, currentValue.length() - 1);
//   }
// });



input.addEventListener("input", (event) => {
  let currentValue = event.target.value;

  const ch = currentValue.charCodeAt(currentValue.length - 1);

  if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122))) {
    event.target.value = currentValue.substring(0, currentValue.length - 1);
  }

  h2.textContent = event.target.value;
});
