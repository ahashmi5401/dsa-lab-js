function sumOfN(n) {
    if (isNaN(n)) "Enter Valid Input > 0"
    else {
        if(n>0){
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i
            }
            return sum
        }
        else{
            return 'n must be than 0'
        }
        
    }
}

let ex1 = sumOfN(2)
console.log(ex1);
