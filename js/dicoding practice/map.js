//map collect data with key-value pair
//but the key not just in string, it could be any datatype
//the key must be unique
const myMap = new Map(); //a way to create map
myMap.set("name", "Annisa"); //set the key and value
myMap.set(1, "One");
myMap.set(false, "No");
console.log(myMap);

//another way instead of using set - with multidimentional array
const myMap2 = new Map(
    [ //first array to save the key-value pair inside it
        ["nama", "Annisa"], //second array to pair the key and value
        [2, "Two"],
        [true, "Yes"],
    ]
);
console.log(myMap2);


const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

//to access the value of the key can using get
console.log("what is the value of key London: ", capital.get("London"));
//to check if the key is has a value
console.log("does this key has a value: ", capital.has("Jakarta"));
//to acces the size of the map
console.log("the size of the map: ", capital.size);
//to add new key and value pair using set()
capital.set("New Delhi", "India");
console.log(capital);
//to delete key and value pair using delete
capital.delete("Tokyo"); //mention the key
console.log(capital);
