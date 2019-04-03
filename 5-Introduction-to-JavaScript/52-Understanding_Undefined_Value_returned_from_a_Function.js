/* In this lesson I learned that when not using a return statement in a function, the output value will be undefined
even though the code within the function will be processed */

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();