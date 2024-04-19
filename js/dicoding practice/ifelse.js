//If true then the operation inside will be executed
//the if statement still look like alot of c++

const isRaining = true;
if (isRaining) {
    console.log("Don't forget to bring your umbrella!")
}
//or
const number = 10;
if (number < 5) {
    console.log("number is less than 5");
} else if (number > 5){
    console.log("number is greater than 5");
} else {
    console.log("number is equal to 5");
}

//ternary operations - with (?) and else with (:)
const isNight = true;
const greeting = isNight ? "Goodnight!" : "Goodday!";

//Truthy and Falsy
//falsy when the value isn't boolean (0, 0n, "", '', null, undefined, Nan(not a number))
let name = "";
if (name){
    console.log('Hello, $(name)!')
} else {
    console.log("Nama masih kosong!")
}

