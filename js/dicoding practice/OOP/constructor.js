//technically unlike other class-base prograamming language like java, c#, c++
// Javacript is a prototype based language, meaning instead of class, js has prototype instead
//prototype is a property of an object that points to another object, it is used to add new properties to object constructors


// Object Blueprint
function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
}

// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.reverse();
car3.turn();


//tho there is no class
//but function above is a special function that can be used to create object, called constructor function
//how do we made this special constructor function?
// 1. create a function with the name of the object that we want to create and should be initial with capital letter
// 2. create properties inside the function with the keyword `this`, this can access the propeerty valyed or method of the object
// 3. create a method using `prototype`, this is so we can inherit the method to the object that we create
// 4. create an object using the `new` keyword to return an object or called them
// lastly noted that constructor function can only be used with the regular function, not using 'arrow operator' function.



//Syntax Class ES6
//Modern javascript support class syntax

class Mobil {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

//Membuat objek mobil dengan constructor function Car
const mobil1 = new Mobil('Toyota', 'Silver', 200, 'to-1');
const mobil2 = new Mobil('Honda', 'Black', 180, 'ho-1');
const mobil3 = new Mobil('Suzuki', 'Red', 220, 'su-1');

console.log(mobil1);
console.log(mobil2);
console.log(mobil3);

mobil1.drive();
mobil2.turn();
mobil3.reverse();

//tho there is a class syntax, it is just a syntactic sugar from the constructor function
//it is still using prototype behind the scene
//but it is easier to read and write
//it is recommended to use class syntax instead of constructor function
//let's prove that class is just a function, let's check the type

console.log("Type of class: " + typeof Mobil); //function
