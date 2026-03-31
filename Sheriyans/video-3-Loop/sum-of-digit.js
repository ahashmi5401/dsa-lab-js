//sum of digit like a = 12 , sum od digit of a is 1+2 => 3

function  sumOfDigit(n) {
    if(isNaN(n)) return 'Invalid Input'
    if(n > 0){
        let sum = 0;
        let temp = n; //temp bcz if we can use n after this 
        while(temp > 0){
            sum += n % 10 
            temp = Math.floor(temp / 10)
        }
        return sum
    }
}

let sumOFDigit = sumOfDigit(1234)
console.log(sumOFDigit);



//Optimize way to do this same 

const sumOfDigits = (n) => {
    if(isNaN(n) || n < 0) return 'Invalid Input'
                                                        //,0 is for intial value , acc value is 0
    let sum =  String(n).split('').reduce((acc , curr) => acc + Number(curr) , 0)
    return sum
}

let sumOfDigit2 = sumOfDigits(1234)
console.log("the optimize way ==>",sumOfDigit2);
