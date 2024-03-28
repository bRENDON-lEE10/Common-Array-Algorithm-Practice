// My Includes Functions
const array1 = [1, 2, 3, 4];

console.log(array1.includes(3));
// Expected output: true

let array2= [1,2,3,4];
console.log(array2.includes(6));
// Expected output: false.

let array3= ["a","b","c"];
console.log(array3.includes("a"));
// Expected output: true

let array4= ["a","b","c"];
console.log(array4.includes("b"));
// Expected output: true

let array5 = ["a","b","c"];
console.log(array5.includes("c"));
// Expected output: true

let array6 = ["a","b","c"];
console.log(array6.includes("d"));
// Expected output: false.

// My Index of Functions
function myIndexOf(array,item){
  for (let i =0; i< array.length; i++){
  if(array[i] === item){
    return i
  }
}
  return -1;
}

console.log(myIndexOf([1,2,3,4,],3));//2
console.log(myIndexOf([1,2,3,4],6));//-1
console.log(myIndexOf(["a","b","c"],"a"));//0
console.log(myIndexOf(["a","b","c"],"b"));//1
console.log(myIndexOf(["a","b","c"],"c"));//2
console.log(myIndexOf(["a","b","c"],"d"));//-1

// Average Functions
function average(numbers){
  let sum = 0

  for(let i = 0; i <numbers.length; i++){
    sum += numbers[i];
  }
  return sum/ numbers.length;
}
console.log(average([1,2,3,4,5]));//3
console.log(average([7,7,7,7,7,7,7]));//7
console.log(average([-10,-5,0,5,10]));//0
console.log(average([90,84,65,73,94]));//81.2

// Count Function
function count(array, item){
  let count = 0;

  for (let i = 0; i , array.length; i++){
    if (array[i] === item){
      count ++;
    }
  }
  return count;
}

console.log(count([1,2,2,3,2,1],2));//3
console.log(count([1,2,2,3,2,1],1));//2
console.log(count(["a","a","e","i","o"],"a"));//2
console.log(count([7,7,7,7],5));//0

// My Max Function
console.log(Math.max(1, 3, 2,4));
// Expected output: 4

console.log(Math.max(0,-3,40,-200,78));
// Expected output: 78

console.log(Math.max(-50,-40,-30,-20));
// Expected output: -20

console.log(Math.max(-20,-30,-40,-50));
// Expected output: -20

// Swap Function
function swap(array, index1, index2){
  let copy = [];

  for (let i = 0; i < array.length; i ++){
    if (i === index1){
      copy.push( array[index2]);
    }else if (i === index2){
      copy.push(array[index1]);
    }else{
      copy.push(array[i]);
    }
  }
  return copy;
}

console.log(swap([2,4,6,8,10],2,4));//[2,4,10,8,6]
console.log(swap(["a","b", "c", "d","e"],0,1));//[`b`,`a`,`c`,`d`,`e`]
