// In this lesson I learned that the strict equal operator === only shows true if the items are the same type and value

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);