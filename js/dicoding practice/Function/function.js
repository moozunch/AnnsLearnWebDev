//one of the example function we often use is .log() in console.log()
//just like math, we input the value then will be proceed with function then the output will be out

//but function can be also a code of block we usually knows in c++ or pascal like procedure and main
//in JavaScript, to declare function just write function followewed with parantheses without space for parameteres and curly brackets for contain code block

function multiply(a, b){
    return a * b;
}

console.log(multiply(5, 10));

function greet(){
    console.log("Hello World!");
}
//void function since they didn't return anyrhing can't be called with console.log in main function or put in a variable

greet() //remember function can only be called if called!


//Expression function, name of the function is optional
const greeting = function(name, language){
    if (language === "English"){
        return "Good Morning " + name + "!";
    } else if (language === "French"){
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}


console.log(greeting("Harry", "English")); //the name of the function is the variable name


//the differences between parameters and arguments is that parameters are the variable in the function declaration, while arguments are the value of the variable when the function is called
function division(a, b){ //this is a parameters
    return a / b;
}

console.log(division(10, 2)); //this is arrguments

//function with object paramteres we can make use of destructuring
const user = {
    id: 12,
    displayName: "Annisa",
    fullName: "Annisa Putri"
};

function introduce({displayName, fullName}){
    console.log(`$(displayName) is $(fullName)`);
} //everything is just written with same name of variable as object properties

introduce(user);

//function with default value
function exponents(baseNumber, exponent){
    const result = baseNumber ** exponent;
    console.log(`${baseNumber} to the power of ${exponent} is ${result}`);
}

exponents(2); //only one argument while it expect 2 arguments, the output is NaN
//if we want to have default number it will be like

function exponents1(baseNumber, exponent = 2){ //automatically will be the power of 2
    const result = baseNumber ** exponent;
    console.log(`${baseNumber} to the power of ${exponent} is ${result}`);
}

exponents1(2);


//Rest parameter, to handle multiple arguments in a function, same like spread operator of an array - written with three dots (...)
function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

console.log("Penjumlahan 1 - 5 = " + sum(1, 2, 3, 4, 5));
