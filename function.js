'ust strict';

// Function

// 규칙
// - 하나의 함수 === 하나의 기능
// - 이름은 동사로 짓기 doSomething, moveSomething
// - 함수는 하나의 object 로 처리됨


printHello(); // function hoisting possible
function printHello(){
    console.log('hello');
}


//Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj){
    obj.name = 'Park';
}
const kim = {name:'kim'};
changeName(kim);
console.log(kim.name);


// Default Parameters
function defaultFuction(message , from = 'unknown'){
    console.log(`${message} by ${from}`);
}
defaultFuction('hi');
defaultFuction('hi' , 'kim');


// Rest Parameters
function printAll(...args) { //여러개의 인자를 배열로 변환
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // for of syntax
    // for (const arg of args){
    //     console.log(arg);
    // }
}
printAll([1,2,3,4]);
printAll('1','2','3','4');


// Return a value
function sum(a,b){
    return a + b;
}
const result = sum(3,5);
console.log(result);
const noReturn = printHello();
console.log(noReturn); // undefined


// early return, early exit
// bad
function doSomething(obj){
    if (obj.point > 10){
        // long logic....
    }
}
// good
function doSomthing2(obj){
    if (obj.point <= 10){
        return;
    }
    else{
        // long logic....
    }
}


//function expresstion

const printHi = function () { //anonymous function
    console.log('Hi');
}
printHi();

const printAgain = printHi;
printAgain();

const sumAgain = sum; 
console.log(sumAgain(3,5));


//Arrow function
//always anonymous
// (parameters) => return
const arrowPrint = () => console.log('arrow');
arrowPrint();

const add = (a,b) => a+b;
console.log(add(3,5));


//IIFE
(function iife(){
    console.log('iife');
})();