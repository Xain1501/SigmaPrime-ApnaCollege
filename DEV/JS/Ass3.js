// q1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
console.log(arr);
arr.splice(arr.indexOf(num), 1);
console.log(arr);

// q2

num = 1234567;
let count = 0;
while (num > 0) {
  count++;
  num = num / 10;
  num = Math.floor(num);
}
console.log(count);

// q3
num = 287152;
let sum = 0;
while (num > 0) {
  sum = sum + (num % 10);
  num = num / 10;
  num = Math.floor(num);
}
console.log(sum);

// q4
num = 7;
let prod = 1;
if (num == 0 || num == 1) {
  console.log(1);
} 
else {
  for (let i = num; i >= 1; i--) {
    prod = prod * i;
   
  }
  console.log(prod);
}

// q5

copy = arr;
copy.sort();
copy[copy.length - 1];
