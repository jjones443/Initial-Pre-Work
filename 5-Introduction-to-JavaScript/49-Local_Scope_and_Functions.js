/* In this lesson I learned that variable scopes depend on if they are defined inside or outside of a function.
Variables declared outside of a function have a global scope which means they can be seen everywhere in the 
JavaScript code. Variables declared inside a function have a local scope that can only be seen within that function */

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
