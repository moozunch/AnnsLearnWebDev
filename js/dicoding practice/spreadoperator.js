//to spread value of an array (iterable object) into another array
//spead operator wrtiten with three dots (...)

const food = ["satay", "fried-chicken", "soup", "french-fries"];
console.log(food);
console.log(...food) //spread operator
//this working like melting array values into several elements
//is also the same as write like this
console.log(food[0], food[1], food[2], food[3]);


//since it only write the content of the array, this will help comabine 2 arrays
const fruit = ["strawberry", "kiwi", "melon", "watermelon"];
const combine = [...food, ...fruit] //combine two array
console.log("combine array: " + combine)
console.log("combine with spead value to write:", ...combine) //apprently we can write with comma instead of plus sign 
