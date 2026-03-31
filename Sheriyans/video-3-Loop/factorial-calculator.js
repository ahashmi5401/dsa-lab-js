function calculateFactorial(n){
    if(!Number.isInteger(n) || n < 0 ) return "Error: Input must be a positive integer.";

    if(n <= 1) return `the factorial of ${n} is 1 `

    //use bigint to prevent overflow 
    let result = BigInt(1)
    let count = BigInt(n)
    console.log(count);
    

    while (count > 1n) {
        result *= count--
    }
    return `The factorial of ${n} is ${result.toString()}`;
}


let ex1 = calculateFactorial(1)
console.log(ex1);
