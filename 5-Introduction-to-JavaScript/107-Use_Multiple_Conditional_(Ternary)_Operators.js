// In this lesson I learned to use multiple inline conditional operators

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);