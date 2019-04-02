/* In this lesson I learned that variable scopes depend on if they are defined inside or outside of a function.
Variables declared outside of a function have a global scope which means they can be seen everywhere in the 
JavaScript code. Variables declared inside a function have a local scope that can only be seen within that function */

// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
var myGlobal = 10;
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}