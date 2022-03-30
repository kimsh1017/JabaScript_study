'use strict';

// Class introduced in ES6

class Circle {
    // constructor
    constructor(radius) {
        this.radius = radius;
    }

    get radius(){ //getter
        return this._radius; // _radius 호출
    }
    set radius(value) { //setter
        this._radius = value <= 0 ? 1: value; // _radius 생성
    }

    getRadius(){ 
        console.log(this.radius);
    }
    getArea(){

        console.log(this.radius*this.radius*3.14);
    }
}

const circle = new Circle(3);
circle.getRadius();
circle.getArea();

circle.radius = 1;
circle.getRadius();
circle.getArea();

const circle2 = new Circle(-1);
circle2.getRadius();
circle2.getArea();


// Fields (public , private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField);// undefined


// Static
class StaticTest {
    static hi = 'hi';  // class 변수?

    constructor (string){
        this.string = string;
    }
}

const test1 = new StaticTest('hello');
console.log(test1.hi);
console.log(test1.string);
console.log(StaticTest.hi);


// inheritance
class Shape {
    constructor(width = 0, height=0, color = 'black'){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getInfo(){
        console.log(`width: ${this.width} height: ${this.height} color: ${this.color}`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Triangle extends Shape { //ingeritance
    getArea() {
        return this.width * this. height / 2;
    }
    getInfo() {
        super.getInfo(); //super method 사용 가능
        console.log('its triangle');
    }
}

const circle3 = new Shape(4,4);
circle3.getInfo();
console.log(circle3.getArea());

const triangle = new Triangle(4,4);
triangle.getInfo();
console.log(triangle.getArea());


// Class checking instanceOf
console.log(circle instanceof Circle); //true
console.log(circle2 instanceof Circle); // true

console.log(circle3 instanceof Circle); // false
console.log(circle3 instanceof Shape); // true
console.log(circle3 instanceof Triangle); // false

console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Triangle);// true

