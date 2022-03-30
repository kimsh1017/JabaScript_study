'use strict';


//Objects
//object = {key : value}
const kim = {name:'kim', age : 21};

const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

kim.job = 'student';  // element add possible
console.log(kim);

delete kim.job; // element delete possible
console.log(kim);


// Computed properties
console.log(kim.name);
console.log(kim['name']);
console.log(kim[name]); //undefined

kim['job'] = 'student';

function example(obj,key,value){
    // obj.key = value; // undefined
    obj[key] = value;
}


// Property value shorthand
function personMake(name,age){
    return {
        name,
        age,
    }; // {'instance' : instance} => {instnce}
}

const person1 = personMake('kim', 23);
console.log(person1);


// constructor function
function Person(name,age){ 
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
const person2 = new Person('park',20);
console.log(person2);


// key check
console.log('name' in kim); // true
console.log('age' in kim); // true
console.log('unknown' in kim); // false

// for  ... in  vs for  ... of
for (const key in kim){ // object
    console.log(key);
    console.log(kim[key]);
}
let args = [1,2,3,4,5];
for (const arg of args){ // array
    console.log(arg);
}


// copy
// 1. shallow copy
const user1 = {'name' : kim, 'age': 20, 'job': false};
const user2 = user1;

user2.name = 'park';
console.log(user1.name);

//2. deep copy
const user3 = {} 
for (const key in user1){
    user3[key] = user1[key];
}
user3.name = 'lee';
console.log(user1.name);

const user4 = Object.assign({},user1);
console.log(user4);


// example
const fruit1 = {'color' : 'red'};
const fruit2 = {'color' : 'blue', 'size': 'big'};

const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed); // color : blue , size: big

