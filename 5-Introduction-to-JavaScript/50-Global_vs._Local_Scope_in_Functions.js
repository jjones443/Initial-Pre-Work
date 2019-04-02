// In this lesson I learned that local scope overrides global scope when a variable is declared inside a function

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  
  var outerWear = "sweater";
  
  // Only change code above this line
  return outerWear;
}

myOutfit();