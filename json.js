'use strict';

//JSON

// 1. Object to JSON

// bool to json 
let json = JSON.stringify(true);
console.log(json); // "true"

// array to json stringfy
json = JSON.stringify(['apple','banana']);
console.log(json); //"["apple","banana"]"

// Object to JSON
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => console.log(`${this.name} can jump!`),
}
json = JSON.stringify(rabbit);
console.log(json); // jump and symbol X

// JSON callback function
json = JSON.stringify(rabbit, ["name","color"]); // only name
console.log(json);

json = JSON.stringify(rabbit , (key,value)=>{ 
    //console.log(`key : ${key} , value : ${value}`);
    return key === 'name' ? 'kim' : value;
});
console.log(json);

// 2. JSON to Object

// parse(json)

const obj = JSON.parse(json);
console.log(obj);
// obj.jump() === error
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); error  obj.birthDate === string 

const obj2 = JSON.parse(json,(key,value) => {
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);


