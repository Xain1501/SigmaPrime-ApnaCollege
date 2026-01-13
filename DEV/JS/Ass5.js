// q1

function Large(n, arr) {
  for (index of arr) {
    if (index > n) {
      console.log(index);
    }
  }
}
let n = 5;
let arr = [33, 2, 1, 4, 6, 8, 9, 5, 4];
Large(n, arr);

// q2
function unique(str) {}
let str = "abcdabcdefgggh";
let l = "";
unique = [];
for (letter of str) {
  if (!unique.includes(letter)) {
    unique.push(letter);
  }
}
console.log(unique);

// q3

let CountNames = ["pakistan", "iran", "united states of america"];
let max = 0;
let maxName = "";
for (index of CountNames) {
  if (max < index.length) {
    max = index.length;
    maxName = index;
  }
}
console.log(maxName);
// q4

str = "Mei hu jiyaan"; //6 vowels
let vow = 0;
for (letter of str) {
  let l = letter.toLowerCase();
  if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u") {
    vow++;
  }
}
console.log(vow);
// q5

let start = 10;
let end = 20;

function rando(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start + 1;
}
console.log(rando(start, end));
