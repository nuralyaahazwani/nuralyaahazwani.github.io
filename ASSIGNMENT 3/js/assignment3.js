console.clear()

let array1 = [100,-8,0,25,30];
let array2 = [5,45,-2,-85,9];

console.log("Max number for array 1 : " + Math.max.apply(null, array1));

console.log("Max number for array 2  : " + Math.max.apply(null, array2));


console.log("Min number for array 1 : " + Math.min.apply(null, array1));

console.log("Min number for array 2  : " + Math.min.apply(null, array2));


const avg = arr => {
  const sum = arr.reduce((acc, cur) => acc + cur);
  const average = sum/arr.length;
  return average;
}

console.log("Average number for array 1 : " + avg(array1));
console.log("Average number for array 2 : " + avg(array2));
