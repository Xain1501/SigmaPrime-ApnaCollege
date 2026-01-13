// q1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayAverage = (arr) => {
  let avg = 0;
  let tot = 0;
  for (el of arr) {
    tot += el;
  }

  return tot / arr.length;
};

console.log(arrayAverage(arr));

// q2

let isEven = (n) => {
  if (n % 2 == 0) {
    return "Its even";
  } else {
    return "Its odd";
  }
};

console.log(isEven(40));
console.log(isEven(41));



// q3
// undefined
// q4
// 0
