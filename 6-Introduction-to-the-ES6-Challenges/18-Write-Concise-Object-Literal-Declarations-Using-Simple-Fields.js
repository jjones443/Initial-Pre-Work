// In this lesson I learned to use literal declarations to make simple object declarations

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  { name, age, gender};
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object