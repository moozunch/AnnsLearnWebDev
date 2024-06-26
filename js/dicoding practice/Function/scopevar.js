// There is a time when we want the variable accessed globally (globally scoped) and when we want the variable only accessible to only inherit to the children of the parent (locally scoped)

//global variable
const a = 'a';

//local variable
function parent() {
    //local variable can be accesed to parent() and child(), but can't be used outside parent()
    const b = 'b';

    function child() {
        //only can be used for child
        const c = 'c';
    }
}


function multiply(num){
    total = num * num;
    return total;
}

let total = 9; //supposed to be won't affect the variable inside function
let number = multiply(20);

console.log(total) //but we get 400 as the output, what happen?
//this because the total in the function doens't have let or const declared
//this kinda make the total is a pointer, so be wise when using variable in javascript
// NOTE : Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
