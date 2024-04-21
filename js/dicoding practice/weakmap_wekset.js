//weakemap is a variant of map that supports garbage collection.
//gaebrage collection is a process of cleaning up memory that is no longer used by the program


//The differences between WeakMap and Map are:
//1. WeakMap only accepts objects as keys, while Map can accept any data type as keys. this because data types that aren't objects which is primitive data types does not support garbage collection
//2. WeakMap does not have a size property, so it is impossible to know the number of data stored in it
//3. Weakmap isn't iterable, so we can't use forEach() or for..of to access the data in it,nor keys() and values()


//this is just a Map
/*
const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(visitsCountMap);
}, 10000)
*/
//we'll soon learn about settimeout() function
//after 10 seconds, the data object "Jonas" will be deleted by the garbage collector, but the data in the map will still be there and still can be printed out

//this is a WeakMap
const { inspect } = require('util');

const visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/

//weakmap usually can be seen with console.log, it's an issue with Node.js(https://github.com/nodejs/node/issues/19001). That's why we are using inspect() to see the data inside
//if the output is not accordance with the code, it means the time used to wait for the garbage collector to work is not enough (https://www.dicoding.com/academies/256/discussions/156523)


//Weakset, just like weakmap
//Weakset is a variant of set that supports garbage collection
//the difference between set and weakset are:
//1. Weakset only accepts objects as values, while set can accept any data type as values
//2. Weakset does not have a size property, so it is impossible to know the number of data stored in it
//3. Weakset isn't iterable, so we can't use forEach() or for..of to access the data in it, nor keys() and values()
//4, Weakset only has add(), delete(), and has() methods, while set has clear() method

//this is just a Set
/*
const naughty
const naughty = new Set();
function warnUser(user) {
    if (naughty.has(user)) {
        console.log("STOP! This user is naughty!");
    } else {
        console.log("This user is not naughty");
        naughty.add(user);
    }
}

let john = { name: "Jonas" };
warnUser(john);  // Menambahkan user

john = null;  // Data object "John" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(naughty);
}, 10000);

//output
//Set { { name: 'Jonas' } }

 */

//this is a WeakSet
const naughty = new WeakSet();
function warnUser(user) {
    if (naughty.has(user)) {
        console.log("STOP! This user is naughty!");
    } else {
        console.log("This user is not naughty");
        naughty.add(user);
    }
}

let john = { name: "Jonas" };
warnUser(john);  // Menambahkan user

john = null;  // Data object "John" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(inspect(naughty, { showHidden: true }));
}, 10000);




