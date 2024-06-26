//OOP focus on making an object and interact with them
//object contain properties (value) and methods (action with those object)
//Example object is car
//then the properties are the brand, color, max speed, and more
//then mwthod are go forward, backward, turn

const car = {
    //properties 
    brand: 'Ford',
    color: 'Red',
    maxspeed: 200,
    chassisNumber: 'f-1',
    //methods - function inside an object
    drive: () => {
        console.log('reversing');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log("turning")
    }
}

console.log(car.brand)
console.log(car.color)
console.log(car.maxspeed)
console.log(car.chassisNumber)
car.drive()
car.reverse()
car.turn()