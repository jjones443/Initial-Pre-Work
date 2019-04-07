/* In this lesson I learned to use default parameters for functions so that if an argument isn't included, 
a preset value will be assigned */

const increment = (function() {
  "use strict";
  return function increment(number, value=1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6