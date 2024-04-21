//Array, a collection of a lot of data with same type of datatype
//written with [] brackets, object curly brackets

let myArray = ['chocolate', 34.5, true, 12, "programming"]; //somehow in javascript, array could contain different type of data
console.log(myArray);
//the differences between array and object is that array is indexed, so we can access the value by their index
console.log(myArray[0]);

console.log(myArray.length)//the size of the array that are not empty
console.log(myArray[5]); //indeks ke 5 - undefined (last indeks = size - 1)

//adding data to the back
myArray.push(79);
myArray.push("new data");
console.log(myArray[myArray.length - 1]); //access last index

//delete data from the back
myArray.pop();
console.log(myArray[myArray.length - 1]);

//adding data to the front
myArray.shift("halo");
myArray.shift(false);
console.log(myArray[0]);

//delete data from the front
myArray.unshift();
console.log(myArray[0]);
console.log(myArray);

//delete for spesific index - same like object
delete myArray[3];
console.log(myArray); //just delete end then let it empty without shrink the size


//modification for spesific format
myArray.push(1, 2, 3);
console.log("Before splice: " + myArray);
myArray.splice(2, 2); //delete 2 data start from index 2
console.log("After splice: " + myArray); //in this case, delete 'prograamming' and empty space

myArray.splice(2, 0, "new data", 12); //delete nya 0, but we are adding new data, see intelliJ
console.log("After second splice: " + myArray); //add 'new data' and 12 from index 0

