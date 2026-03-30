console.time()
function electricBillCalculator(unit){
    if (typeof unit !== 'number' || isNaN(unit)) {
        return "Invalid Input: Please enter a numeric amount (e.g., 9500).";
    }
    let rate = 0
    let amount = 0
    if(unit < 0) return 'enter valid input'
    if(unit > 400){
        rate = 12 
        amount += (unit - 400)*rate
        unit = 400
    }
    if(unit < 400 && unit >= 300){
        rate = 10
        amount += (unit - 300) * rate
        unit = 300
    }
    if(unit < 300 && unit >= 200){
        rate = 8
        amount += (unit - 200)* rate
        unit = 200
    }
    if(unit < 200){
        rate = 6
        amount += unit*rate
    }
    return `total bill ${amount}`
}

let bill1 = electricBillCalculator(700)
console.log(bill1);
console.timeEnd()


//Advance way to do this 
function electricBillCalculator2(units){
    if (typeof units !== 'number' || units < 0) return "Invalid Input";

    const slabs = [
        { threshold: 400, rate: 12 },
        { threshold: 300, rate: 10 },
        { threshold: 200, rate: 8  },
        { threshold: 0,   rate: 6  }
    ];

    let totalAmount = 0;
    let remainingUnits = units

    for (const {threshold , rate} of slabs) {
        if(remainingUnits > threshold){
            let unitInThisSlab = remainingUnits - threshold
            totalAmount += unitInThisSlab * rate

            remainingUnits = threshold
        }
    }
    return totalAmount
}

console.log(electricBillCalculator2(700));