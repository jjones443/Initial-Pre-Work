/* In this lesson I learned to use parameters which hold the place of arguments or values that will be used within
a function at a later time. This means a function can be set up with parameters and then assigned values later when
the argument is invoked */

// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(c, d) {
  console.log(c + d);
}

functionWithArgs(10, 5);