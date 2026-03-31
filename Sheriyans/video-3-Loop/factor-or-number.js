const factorNumber = (n) => {
    if(isNaN(n) || n < 1) return "Enter Valid Input"
    else {
        let factorArr = []
        for (let i = 1; i <= n; i++) {
            if(n % i  === 0){
                factorArr.push(i)
            }
        }
        return `${n}  divisible by  : ${factorArr.join(',')}`
    }
}

let ex1 = factorNumber(4)
console.log(ex1);



//Optimize way to do it
const factorNumber2 = (n) => {
    if (isNaN(n) || n < 1) return "Enter Valid Input";
    
   let factorArr = []
   let limit = Math.sqrt(n)
   for (let i = 1; i <= limit ; i++) {
    if(n % i === 0){
        factorArr.push(i)

        ///// Check: Agar 'i' apne partner (n/i) ke barabar nahi hai, 
        // tabhi dusra factor add karo (taaki 6x6 jaise perfect squares mein 6 do baar add na ho).
        if(i !== n/i){
            console.log(i , n);
            
            factorArr.push(n/i)
        }
    } 
    
   }
   factorArr.sort((a, b) => a - b);
    
    return `${n} is divisible by: ${factorArr.join(', ')}`;
}

console.log(factorNumber2(6)); 
// Output: "36 is divisible by: 1, 2, 3, 4, 6, 9, 12, 18, 36"


