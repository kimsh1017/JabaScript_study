'use strict';

//Array

// Declaration
const arr1 = new Array();
const arr2 = [1,2,3];

// Index
console.log(arr2.length); // 3
console.log(arr2[1]); // 2
console.log(arr1[1]); // undefined

//3. Looping over an array
for(const i of arr2){
    console.log(i);
}

arr2.forEach((value,index) => console.log(`value ${value} , index ${index}`));

// Add delete copy
const fruit = new Array();

// Add
fruit.push('banana');
fruit.push('apple');
console.log(fruit);

fruit.unshift('kiwi'); //leftpush === unshift
console.log(fruit);

// Delete
fruit.pop();
console.log(fruit);

fruit.shift() //popleft === shift
console.log(fruit);
// shift unshift is slower than pop push

//splice(start_index, delete_range)
const arr3 = [0,1,2,3,4,5,6];
arr3.splice(1);
console.log(arr3);

const arr4 = [0,1,2,3,4,5,6];
arr4.splice(1,2);
console.log(arr4);

// splice -> 중간에 요소 삽입 가능
const arr7 = [0,1,2,3];
arr7.splice(1,0, 7,7);
console.log(`arr7 = ${arr7}`); 

// first_Arr.concat(SecondArr) = [first , second]
const arr5 = arr3.concat(arr4);
console.log(arr5);


// Searching

// indexOf
console.log(arr4.indexOf(6)); // arr.indexOf(a) = return indexof a
console.log(arr4.indexOf(2)); // returen -1
// includes
console.log(arr4.includes(2)); // arr.includes(a) = return true of false
// lastIndexOf;
console.log(arr5.lastIndexOf(0)); // arr5 = [0,0,3,4,5,6] = > return 1;
