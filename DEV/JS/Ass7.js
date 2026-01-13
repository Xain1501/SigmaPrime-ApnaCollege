// q1
let ans=(arr)=>{
  let sum=0;
  for (i of arr){
    let square=i**2;
     sum+=square;
  }
  avg=sum/arr.length
  return avg;
}
let arr=[1,2,3,4,5]
console.log(ans(arr));

// q2

newarr= arr.map((curr)=>{ return curr+=5})
console.log(newarr);

// q3
arr=['a','b','c']
newarr= arr.map((curr)=>{ return curr.toUpperCase()});
console.log(newarr);

// q4
arr=[1,2,3,4,5]
function doubleAndReturnArgs(arr,...args){
  newarr=[...arr,...args]
  for(let i=0;i<newarr.length;i++)
  {
    newarr[i]=newarr[i]*2;
  }
  return newarr;
}
console.log(doubleAndReturnArgs(arr,5,6,7,8));

// q5

let firstobj={
  name:"zain",
  age:21
}
let secondobj={
  city:"Karachi",
  count:"Pakistan"
}

function MergeObject(firstobj,secondobj)
{
let finalobj={...firstobj,...secondobj}
return finalobj;
}

MergeObject(firstobj,secondobj);