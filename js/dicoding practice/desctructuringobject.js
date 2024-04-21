//Destructuring works for object and array
//menggunakan file json(Javascript object notation)

//remember object
const profile = {
    firstname: "Annisa",
    age: 19,
    location: "Indonesia"
}

//then we write it again in the local variable with the same name
/*
const firstname = profile.firstname
const age = profile.age
console.log(firstname, age)
*/
//if the object has a lot of properties this work will take a lot of time, that's why we need desctructuring object and array
//desctrucuting object written with cutly brackts {}

const { firstname, age, location } = profile; //written all of the object properties in a local variable
console.log(firstname, age, location);



const student = {
    name: "John Doe",
    umur: 18,
    studentID: "XI92304J",
    major: "Computer Science"
}

let name = "Annisa";
let umur = 19; //let's say we already have variable with the same name as the object but we want to match it with object then

//initialize new value with destrucuring object
({name, umur, isMale} = student); //we can use the same name of the variable to match the object properties, then now the values will the same as object
//writing the destructuring neeed usual brackets before the curly one to avoid confusion with block of code since statement (begin and end) is also written with curly brackets
console.log(name, umur, isMale); //now the value of name and umur is the same as the object properties while isMale is undefined since we haven't set the values in object, alternate
({name, umur, isMale = true} = student);
console.log(name, umur, isMale);



//meanwhile to write it in with different variable name can be written like this:
const {
    name: var1,
    umur: var2,
    isMale: var3 = true,
    isAmerican: var4 = false
} = student;

console.log(var1, var2, var3, var4);
