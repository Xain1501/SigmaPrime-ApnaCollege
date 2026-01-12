// // q1

// let num=9
// console.log(num)

// if(num%10)
// {
//   console.log("Not good");

// }
// else{
//   console.log("Good")
// }



// q2

// let Name = prompt("Enter Your Name");
// let age = prompt('Enter your age');

// alert(`${Name} is ${age} years old`);


// q3


// let num= prompt("Enter number");
// switch (num) {
//    case 1: console.log("jan feb march")
//     break;
//    case 2: console.log("april may jun")
//     break;
//    case 3: console.log("jul aug sep")
//     break;
//    case 4: console.log("oct nov dec")
//     break;
  
//   otherwise:
//     console.log("Wrong Number entered")
// }
 
let str= "bhai jaan";
if(str.length>5 || str[0]=='a'||str[0]=='A')
{
  console.log("This is a Golden String");
}
else{
  console.log("This is not a golden string");
}


// q5

let a=3
let b=4
let c=5
if(a>b && a>c){
  console.log(a)
} 
else if(b>a && b>c){
  console.log(b)
} 
else{
  console.log(c)
}


let str1="32";
let str2="243564532";
if(str1[-1]== str2[-1]) 
{
  console.log("digits have same last number");
}
