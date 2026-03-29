//one method in which we made new variable for swap

//a ki value swap karne ke baad 20 or b ki 10 hojaigi 
let a = 10
let b = 20;
let c = a;   
     a = b       
     b = c



//one method in which we don't need to make new var 

let aa = 10;
let bb = 20;

//bari value ko - karenge ke uski bari mai

aa = aa + bb; //30 is new value of aa but b value tou 20 se swap karni thi tou 1 more step
bb =  aa - bb; //10 is new value of bb

aa = aa - bb; //30 - 10 aa is finally => 20
console.log(aa , bb);



//use array  destructuring for swaping 

let aaa = 40;
let bbb = 20;

[aaa , bbb] = [bbb , aaa]
console.log(aaa , bbb);


//Using a Single-Line Compound Assignment (Trick)
let aaaa = 1;
let bbbb = 2;

aaaa = aaaa + bbbb - (bbbb = aaaa)
console.log(aaaa , bbbb);


//also XOR Operator (optional advance , memory efficiency) , issuein non numeric value

let n1 = 1
let n2 = 2


n1 = n1 ^ n2 // a is 3 now (binary 011)
n2 = n2 ^ n1 //b is 3 ^ 2 = 1 (binary 001)
n1 = n1 ^ n2  //b is 3 ^ 1 = 2 (binary 010)
console.log(n1 , n2);
