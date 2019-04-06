// In this lesson I learned that the let keyword is used to prevent accidentally overwriting variables in larger code

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();