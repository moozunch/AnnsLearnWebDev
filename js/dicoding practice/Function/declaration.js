function multiply(a, b){
    return a * b;
}

function greeting(){
    console.log("Good Day!")
}


let result = multiply(3, 4)
console.log(result)
greeting() //become void function


function greeting(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
  }

greeting("Harry", "French");