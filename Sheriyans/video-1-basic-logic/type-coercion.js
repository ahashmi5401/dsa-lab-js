//Type coercion In Js
//Type coercion in JavaScript is the automatic or implicit conversion of values from one
//  data type to another.


//Implicit Coercion: JavaScript automatically converts types behind the scenes. 
//  For example, when adding a number and a string, the number is converted to a string for 
// concatenation.
const value1 = "5";
const value2 = 9;
let sum = value1 + value2; // JavaScript coerces 9 to "9", resulting in the string "59"
console.log(sum); 



//Explicit Coercion: The developer intentionally converts the type using built-in functions or 
// operators like Number(), String(), or Boolean().

const v1 = "5";
const v2 = 9;
let sums = Number(v1) + v2; // Explicitly converts "5" to the number 5, resulting in the number 14
console.log(sums); 
