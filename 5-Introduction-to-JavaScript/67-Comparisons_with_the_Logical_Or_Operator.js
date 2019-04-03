/* In this lesson I learned what I missed in the last lesson. Where the And operator returns true if both values are true, 
the Or operator returns a value if either are true */

function testLogicalOr(val) {
  // Only change code below this line


  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);