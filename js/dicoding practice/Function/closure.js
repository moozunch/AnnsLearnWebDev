// a function that can access the variable inside the lexical scope is called as closure
//lexical scope meaning a nested function, that can accesed parent's variable

function init(){
    const name = 'Obi Wan'; //local variable inside init function scope


    function greet(){ //inner function, called as closure
        console.log(`Halo, ${name}`); //called parent's variable
    }

    greet(); //tho greet function has no parameter but still can called the parent's variable, this called as lexical scope
}

init()


// see the difference

function init2(){
    const name = 'Annisa Putri Aprilia';

    function greet2(){
        console.log(`Hello, ${name}`);
    }

    return greet2; //using return for the inner function
}

const myFunc = init2();
myFunc();
//Kode di atas akan menghasilkan output yang sama. Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya sebelum dieksekusi. Karena variabel name berada dalam scope init(), maka umumnya variabel tersebut akan hilang atau dihapus ketika fungsinya selesai dijalankan. Namun, pada kasus di atas fungsi greet() yang diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel name. Variabel pada mekanisme di atas telah tertutup (close covered), yang berarti variabel tersebut berada di dalam closure.




// Now unlike java that has a way to make variable or a function private, so the variable and function can be accessed anywhere

let counter = 0;
const add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());
// this way to use globally scoped isn't recommeded for long term use cause this can make an ambigous term and later can causes bug
//That's why closure recommended so the variable can be private and can't be accessed nowhere outside the function

const adds = () => {
    let counter2 = 0;
    return () => {
        return ++counter2;
    }
}
const addCounter = adds();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
