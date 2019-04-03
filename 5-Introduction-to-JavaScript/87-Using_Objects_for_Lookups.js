// In this lesson I learned to use an object as a way to search for items instead of using switches or if/else

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
}
result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");