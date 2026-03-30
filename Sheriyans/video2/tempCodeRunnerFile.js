function noteMaker2(amount){
     if(amount < 0) return 'invalid input'
     let remainingAmount = amount
     let infoNote = [5000 , 1000 , 500 , 100 , 50 , 20 , 10 , 5, 2, 1]
     const result = {}
     for (const note of infoNote) {
        if(remainingAmount >= note){
            result[note] =  Math.floor(remainingAmount /note)
            remainingAmount = remainingAmount % note
        }
     }
     //
     if (remainingAmount > 0) result.change = remainingAmount;
     return result
}

let currencyQuantity = noteMaker2(103021)
console.log(currencyQuantity);