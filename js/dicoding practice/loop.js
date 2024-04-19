
// 1. For loop - look alike c++
for (let i = 1; i <= 10; i++){
    console.log("hello world!" + i);
}
// tho get used to starting from 0, since array index start from 0

// 2. For.. of - loop through array(kind of look like loop in kotlin and python)
let myArray = [1, 2, 3, 4, 5];
for (let value of myArray){
    console.log(value);
}

//3. While and do while - look alike c++
let x = 0
while (x < 5){
    console.log ("loop while " + x);
    x++;
}
let y = 1;
//do while at least once executed!
do {
    console.log("loop do while " + y);
    y++
} while (y > 2)
