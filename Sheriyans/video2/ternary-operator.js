//Ternary Operator Syntax

let user = true;

let login = user ? "Already Login" : "Login Plz";
console.log(login);

//Nested Ternary Operator
//also these logic is perfect if i use .filter but  due to practice of ternary 
let no = 1235;
let arr = [12, 14, 1, 24, 23, 34, 2, 1];
let evenArr = []
let oddArr = []

function splitArray(array){
    for (let i = 0; i < array.length; i++) {
        let no = array[i]
        no > 0 ? (no % 2 == 0 ? evenArr.push(no) : oddArr.push(no)) : "false";
    }
    return {
        Array : array,
        EvenArray : evenArr,
        OddArray : oddArr
    }
}

let splitEvenOdd = splitArray(arr)

console.log(splitEvenOdd);
