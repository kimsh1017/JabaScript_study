'use strict';


// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];

    const st = fruits.join(' ');
    console.log(st);
}

  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    const arr = fruits.split(',');
    console.log(arr);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.splice(2);
    console.log(newArray);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const goodGrade = new Array();
      for (let student of students){
          if (student.score == 90 ){
              goodGrade.push(student.name);
          }
      }
      console.log(goodGrade);

      const gG = students.find(student => student.score === 90); // find 첫번째로 true 인 요소 받아오기
      console.log(gG);
  }
  
  // Q6. make an array of enrolled students
  {
      const arr = students.filter(student => student.enrolled); //filter 원하는 요소만 받아오기
      console.log(arr);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const arr = students.map(student=>student.score);
      console.log(arr);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      const result = students.some(student=>student.score < 50); // some = 조건 만족하는 요소 있는지 유무 판정
      console.log(result);

      const result2 = students.every(student=>student.score >= 50); // every = 모든 요소가 조건을 만족하고 있는지 유무 판정
      console.log(result2);

  }
  
  // Q9. compute students' average score
  {
      const average = (students.reduce((prev,curr)=>(prev + curr.score),0)) / students.length; 
      // reduce((prev,curr) => (logic , start)) === logic(start,prev) -> logic(last_logic,curr) -> logic(last_logic,curr + 1)
      console.log(average);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const arr = students.map(student=>student.score);
      const result = arr.join(', ');

      //const result = students.map(student=>student.score).join(', ');
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const arr = students.map(student=> student.score);
      arr.sort((a,b) => a - b);
      console.log(arr);
  }