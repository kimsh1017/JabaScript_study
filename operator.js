'use strict';
// git test 1

//string concatenation
console.log('my' + 'cat');
console.log('1' + 2);

// numeric operators
console.log(7 % 3);
console.log(3 ** 3);

let counter = 1;
console.log(counter++);
console.log(counter);
console.log(++counter);

// Equality
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); //true
console.log(stringFive === numberFive); //false

// object equality
const kim1 = {name: 'kim'};
const kim2 = {name: 'kim'};
const kim3 = kim1;

console.log(`conpare 1&2 : ${kim1 == kim2}`);
console.log(`conpare 2&3 : ${kim2 == kim3}`);
console.log(`conpare 1&3 : ${kim1 == kim3}`);


console.log(`conpare 1&2 : ${kim1 == kim2}`);
console.log(`conpare 2&3 : ${kim2 == kim3}`);
console.log(`conpare 1&3 : ${kim1 == kim3}`);

// equality - puzzler
console.log('puzzle --------');
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// conditional operators
if([] === ''){
    console.log('true');
}
else console.log('false');

// ternary operator
console.log([]==''?'true':'false');

//switch,while,for operator === C switch operator
