//strong number is 145 = 1! + 4! + 5! = 145 

function strongNo(n){
    if (isNaN(n) || n < 0) return "Invalid Input"
    let sum = 0;
    let temp = n;
    if(temp > 0){
        while(temp > 0){
            let lastDig = temp % 10
            let ftr = 1;
            for (let i = 2; i <= lastDig; i++) {
                ftr *= i
            }
            sum += ftr
            temp = Math.floor(temp / 10)
        }
        if(n === sum){
         console.log(sum);
         return `the ${n} is strong number`
        }
        else if (n !== sum){
         // return `the ${n} is not strong number bcz not equal to the => ${sum}`
         return sum
        }
    }
    return sum 
}

let strongNo1 = strongNo(493993585);
console.log(strongNo1);



//Efficient way if number is big so it have to do much calculation


function strongNo2(n){
    if (isNaN(n) || n < 0) return "Invalid Input"
    const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    let sum = 0;
    let temp = n;
        while(temp > 0){
            let lastDig = temp % 10;
            sum += factorials[lastDig];
            temp =  Math.floor(temp/10)
        }

    return sum === n 
        ? `The ${n} is a strong number.` 
        : `The ${n} is NOT a strong number. Sum was ${sum}.`;
}

let strongNo21 = strongNo2(145);
console.log(strongNo21);
