function noteMaker(amount){

    if(amount < 0) return 'invalid input'
    if(amount % 5 === 0){
        let remainingAmount = amount % 500
        if(amount >= 500){
            console.log('quantity of 500 note is ' ,Math.floor(amount/500));
            amount = amount%500;
        }
        if(amount < 500 && amount >= 200){
            console.log('quantity of 200 note is ',Math.floor(amount/200));
            amount = amount%200
        }
        if(amount < 200 && amount >=100){
            console.log('quantity of 100 note is ',Math.floor(amount/100));
            amount = amount%100
        }
        if(amount < 100 && amount >=50){
            console.log('quantity of 50 note is ',Math.floor(amount/50));
            amount = amount%50
        }
        if(amount < 50 && amount >=20){
            console.log('quantity of 20 note is ',Math.floor(amount/20));
            amount = amount%20
        }
    }
}
let currency = noteMaker(4200)
console.log(currency);


//advance method 

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
