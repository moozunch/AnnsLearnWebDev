// datatype in Javascript

// 1. Undefined - no value
let x;
console.log(typeof(x));

// 2. Numbers - with arithmatic or logical operator and also include decimal (real)
let y = 10;
console.log(typeof(y));
console.log(y++) //increment
console.log(y)

// 3. BigInt - number with more than 2^53 - 1 (will be used a lot in criptography)
//to use this datatype just add n at the end of number
console.log(10n);
console.log(typeof(10n));
console.log(5n + 2n);

// 4. Strings
let greet = "Hello";
//it's okay to use single quote
let greet2 = 'Hello again! it\'s me';  //(\) backslash so the interpreter know that the single quote after it is on purposes for text, not just quote tho, any ambiguitas in code.
console.log(typeof(greet));
console.log(typeof(greet2));
console.log(greet2);

//string concat
let bigGreet = greet + greet;
console.log(bigGreet);

//string interpolation - use variable with string
let name = "Annisa";
console.log(`Hello, my name is ${name}`); //use backtick (`) to use string interpolation


// 5. Boolean - with comparison operator
let z = true;
let isGreater = 10 > 5
console.log(typeof(z));
console.log(isGreater)


// 6. Null - kind of like undefined but intentional and dosen't need to be declared
//Null is a value
let empty = null;
console.log((empty));
console.log(typeof(empty)); //type data object which is modern type data in Javascript


// 7. Symbol - unique and immutable value
const simbol = Symbol("id");
console.log(simbol);

//here's and example
const id1 = Symbol("identifikasi");
const id2 = Symbol("identifikasi");
console.log(id1 == id2) //now, even tho they have the same value but they are not the same, like id they are unique and only avalaible for them.


//Tricky part, the differences between this comparison operator
const aString = '10';
const aNumber = 10;
console.log(aString == aNumber)// true cause the value is the same
console.log(aString === aNumber)//false, cause they have different data type

// also (tidak sama) using !== with double ==
