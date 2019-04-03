// In this lesson I learned that else statements can be used to execute actions if the if statement returns false

function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller"
  }
  

  
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);