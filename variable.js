'use strict';
// git test 2

// let - 변수 선언
let x;
x = 3;

console.log(x);

//var hoisting
//var (Don't use this!!)

console.log(var_a); //var hoisting no waring, undefined
var_a = 5;
var var_a;
console.log(var_a);

//constants

const const_a = 5;
// const_a = 6; 불가능


// Variable types

const count = 17; //number
const size = 17.1; //decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);
// 정수, 소수 둘 다 number

const infinity = 1/0; //infinity
const negaticeInfinity = -1/0; //-infinity
const nan = 'not a number'/2; //NaN
console.log(infinity);
console.log(negaticeInfinity);
console.log(nan);

//binInt
const bigInt = 1234545464234141341414341351351513513n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

// string
const char = 'c';
const name = 'kim';
const greeting = 'hello' + name;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const hellokim = `hello ${name}}`; // template literals
console.log(`value : ${hellokim}, type : ${typeof hellokim}`);


//boolean
//false = 0, null, undefined, NaN, '', []
//true: any other value

console.log(false==undefined); // false?

//null vs undefined
let nothing; //undefined
let null_x = null; //null;
console.log(nothing == null_x); //true?


//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(`symbole test : ${symbol1 == symbol2}`);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1.description}`);


//Dynamic typing: dynamically typed language

let text = 'hello';
console.log(`value \'hello\': ${text}, type : ${typeof text}`);
text = 3;
console.log(`value 3: ${text}, type : ${typeof text}`);
text = '3' + 5;
console.log(`value \'3\' \+ 5: ${text}, type : ${typeof text}`);
text = '4' / 2;
console.log(`value \'4\' \/ 2: ${text}, type : ${typeof text}`);


//object , real-life object, data structure
kim.age = 21; // 가능
const kim = {name: 'kim' , age: 20};


