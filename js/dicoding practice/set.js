//set is a collection of values without indexes,without duplicate values and without order

const numberSet = new Set([0, 1, 2, 3, 4, 5, 1]);
console.log(numberSet)//1 only written once

//to add new value just use add()
numberSet.add(9)
numberSet.add(10) //add only can adding once value at a time
numberSet.add(11)
numberSet.add([4, 7, 6, 8, 2]) //so this will only count as one value which is an array
console.log(numberSet)

//to delete value use delete()
numberSet.delete(4) //value of 4 will be deleted but what's inside of an array will not, and also what deleted is not an index, it's the actual value
console.log(numberSet)
