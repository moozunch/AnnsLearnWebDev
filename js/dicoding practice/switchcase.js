//Kind of look like if else but with a lot of condition
//Switch case is important to use break

let day = 1;
let dayname;


//unlike c++, Javaascript support non char value, so string is also valid case
switch(day) {
    case 0:
        dayname = "Sunday";
        break;
    case 1:
        dayname = "Monday";
        break;
    case 2:
        dayname = "Tuesday";
        break;
    case 3:
        dayname = "Wednesday";
        break;
    case 4:
        dayname = "Thursday";
        break;
    case 5:
        dayname = "Friday";
        break;
    case 6:
        dayname = "Saturday";
        break;
    default:
        dayname = "Invalid day";
        break;
}

console.log(dayname)
