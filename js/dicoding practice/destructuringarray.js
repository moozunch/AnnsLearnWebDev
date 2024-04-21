//remember array using square brackets []
const sport = ['soccer', 'basketball', 'badminton'];
const [sport1, sport2, sport3] = sport; //destructuring
console.log (sport1, sport2, sport3);
//one differneces destructing object and array is that in array, when destructuring we don't have to use same name for variable local
//we can also choose the index we want to fill with the local variable, just don't fill(skip) the index we are not aiming
const favorites = ["seafood", "pizza", "burger"]
console.log(favorites);
const [, , thirdFavorite] = favorites;
console.log(thirdFavorite);

//destructuring assignment - just the same as object but doesn't have to be wrpped in usual brackets
let food1 = "sushi";
let food2 = "ramen";
[food1, food2] = favorites
//then noew food1 and food2 will have value same as the array with start from index 0
console.log(food1, food2);


//destructuring array will help a lot when we play with swap value of a variable
let a = 1;
let b = 2;
let temp;
console.log("Sebelum swap");
console.log("Value of a: " + a);
console.log("Value of b: ", b);

temp = a; //temp = 1
a = b; //a = 2
b = temp //b = 1
console.log("Setelah swap");
console.log("Value of a: " + a);
console.log("Value of b: ", b);

//there!, to swap we need a new variable (temp) for temporary storage, but with destructuring array we can do it in one line (without new variable)
let x = 5;
let y = 10;
console.log("sebelum swap");
console.log("Value of x: " + x);
console.log("Value of y: ", y);
[x, y] = [y, x]; //destructuring for swap
console.log("setelah swap");
console.log("Value of x: " + x);
console.log("Value of y: ", y);


//and also the same as object, value of an array which the value that actually are not existed will be filled wuth the default which is undefines
const game = ["Valorant"];
const [myGame, herGame] = game

console.log(myGame);
console.log(herGame); //undefined
//to fill it we caan do this
// const [myGame, herGame= "salad"] = game
