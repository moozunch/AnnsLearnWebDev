//Data Structures, could save so many value

//object could contain all data type, kind of like record in pascal
//object written with {} curly brackets

const record = {};
//objects written with a key and a value, key is like a variable name and can be any type of dataa
let objct = {key1: "value1", key2: "value2"};

//real example
const user = {
    nama: "Annisa",
    age: 18,
    githubAccount: "Moozunch",
    isFemale: true,
    "address": "Medan" //key can be string
}

//kind of like record in pascal
console.log("Hello my name is " + user.nama);
console.log("I'm " + user.age + " years old");
console.log("My github account is " + user.githubAccount);
console.log("My address is in " + user["address"]); //instead of using dot we can also call it directly by their key with bracket and double qoute
console.log("Am I a female? " + user["isFemale"])


user.age = 19; //change the value with assignment operator
console.log("UPDATE: I'm " + user.age + " years old now");
/*
WAIT, the object is const right but how can we change the value???
that's because the object is still the same, the value is the one that change
the value of object is the reference to the memory location of the object, so when we change the value, the reference is still the same, so the object is still the same
or let's say the value of the object is actually the key, not the value of the key, tho we still can add new key to the object
*/
user.isStudent = true; //adding new key to the object
console.log(user);


delete user.address; //delete properties(key and value) of an object
console.log(user);
