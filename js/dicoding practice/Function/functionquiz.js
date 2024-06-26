//1
function minimal(a, b){
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minimal(3, 2))

//2
function findIndex (arr, num){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num){
            return i;
        }
    }
    return -1; // This way, the function will return -1 only after it has checked all elements in the array and did not find a match.
}

console.log( findIndex([1, 2, 3, 4, 5], 5)) // output: 4
