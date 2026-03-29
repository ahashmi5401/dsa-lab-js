//++ , --

//a++ is post increament 
//++a is pre inceament

let a = 1;
let b = 2;

let c = a + b + a++ + b++ + ++a + ++b;
console.log(c);

let aa = 10
let bb = --(++a) //create error bcz of (++a) = 10 => ++10 give error


//a-- is post decreament 
//--a is pre decreament 


//can work on boolean also 
let d = false //true is 1  ,false is 0
d++
console.log(d);
