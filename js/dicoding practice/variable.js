//Three ways of writng variables in Javascript
// 1.
var User = "Moozunch"; //prone to causing bugs because it can be accessed by all scripts
//instead use let oe const

// 2. let
let age; //declaration
age = 19;
let name = "annisa";
console.log(name + age + " years old");
// 3. const - value can't be changed
const github = "Moozunch";
console.log(github)

//now this make our last code make sense, last we talk about exspression and statement
//statement is the code function and expression is the value of the code
//example:
let x = 5; //let x is the statement and 5 is the expression
