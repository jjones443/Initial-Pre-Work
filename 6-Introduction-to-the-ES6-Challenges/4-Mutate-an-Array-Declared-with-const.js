// In this lesson I learned you can change the object a const keyword has declared even if the const variable cannot be changed

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2;
  s[1] = 5; 
  s[2] = 7; 

  // change code above this line
}
editInPlace();