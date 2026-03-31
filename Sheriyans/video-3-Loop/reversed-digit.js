const reversedDigit = (n) => {
    if (isNaN(n) || n < 0) return 'invalid input';

    if(n > 0){
        let rev = 0;
        while (n > 0){            //1st
            let rem = n % 10;    //4 aya hoga 
            rev = rev*10 + rem;  //rev 0 tha tou ye bhi 4
            n = Math.floor(n / 10)    // 123.4 ko floor kardia tou 123 
        }
        return rev
    }
}

let reversedDigit1 = reversedDigit(1234)
console.log(reversedDigit1);
