console.log('=====================>Right Angle Triangle by using *<=====================');

function rightAngleTriangle(n){
    let rightAngleTriangle = ""
    for(let i = 1 ; i <= n ; i++){
        let row = ''
        for (let j = 1; j <= i; j++) {
            row += "*"
        } 
        rightAngleTriangle += row + '\n'
    }
    return rightAngleTriangle
}

let seeTriangle = rightAngleTriangle(5);
console.log(seeTriangle);


//using number for make triangle 
console.log('=====================>Right Angle Triangle by using Number<=====================');
function rightAngleTriangle2(n){
    let result = ''
    for (let i = 1; i <= n; i++) {
       let row = ''
       for (let j = 1; j < i; j++) {
         row += j
       }
       result  += row + '\n';
    }
    return result
}

let RightAngleTriangle2 = rightAngleTriangle2(8)
console.log(RightAngleTriangle2);


//made right angle triangle by emoji
console.log('=====================>Right Angle Triangle by using Emoji<=====================');
function rightAngleTriangle3(n){
    let result = ''
    for (let i = 1; i <= n; i++) {
       let row = ''
       for (let j = 1; j < i; j++) {
         let eachLetter = String.fromCharCode(j)
         row += eachLetter
       }
       result  += row + ' \n';
    }
    return result
}

let RightAngleTriangle3 = rightAngleTriangle3(8)
console.log(RightAngleTriangle3);


//made right angle triangle by alphabet but with easy and advance method
console.log('=====================>Right Angle Triangle by using Alphabet<=====================');
function rightAngleTriangle4(n){
    for (let i = 1; i <= n; i++) {
       for (let j = 1; j <= i; j++) {
           let eachLetter = String.fromCharCode(64 + j) //bcz alphabet start from 5
           process.stdout.write(eachLetter)
       }
       console.log();
    }
    return `the end \n`
}

let RightAngleTriangle4 = rightAngleTriangle4(8)
console.log(RightAngleTriangle4);






//REVERSE RIGHT ANGLE TRIANGLE 
console.log('=====================>Reversed Right Angle Triangle by using Alphabet<=====================');
function rightAngleTriangle5(n){
    for (let i = 1; i <= n; i++) {
       for (let j = n; j >= i; j--) {
           let eachLetter = String.fromCharCode(64 + j) //bcz alphabet start from 5
           process.stdout.write(eachLetter)
       }
       console.log();
    }
    return `the end`
}

let RightAngleTriangle5 = rightAngleTriangle5(8)
console.log(RightAngleTriangle5);


//Mirror Right Angle Triangle 
console.log('=====================>Mirror Right Angle Triangle by using Alphabet<=====================');
function rightAngleTriangle6(n){
    for(let i = 1 ; i <= n ; i++){
        for (let j = n; j >=i ; j--) {
            process.stdout.write(" ")
        }
        for (let k = 1; k <= i; k++) {
            process.stdout.write("*")
            
        }
        console.log();
    }
}

rightAngleTriangle6(5)