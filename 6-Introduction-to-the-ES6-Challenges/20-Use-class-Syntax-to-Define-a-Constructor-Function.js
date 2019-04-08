// In this lesson I learned to use the class syntax for defining a function

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(carrot){
      this.name = carrot;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'