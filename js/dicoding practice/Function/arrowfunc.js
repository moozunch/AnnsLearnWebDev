// => for expression only, can't be for declaration
// Expression function is a function that is assigned to a variable. The name of the function is optional.

// Comparison, Regular Expression Function
const sayName = function(name){
    console.log(`Nama saya ${name}`);
}
sayName("Annisa")


// VS Arrow Function - langsung namevar = parameter => {expression}
const sayName2 = name => {
    console.log(`Nama saya ${name}!`);
}
sayName("Putri")


// Arrow function without parameters, the brackets are still needed
const sayHello = () => {
    console.log("Hello!");
}
sayHello()

//lastly if the body content only one thing, we can remove the curly brackets
const sayHello2 = () => console.log("Hello!");
sayHello2()

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
