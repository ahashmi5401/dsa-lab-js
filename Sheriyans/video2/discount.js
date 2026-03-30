function discountApplier(spendAmount) {
    if (typeof spendAmount !== 'number' || isNaN(spendAmount)) {
        return "Invalid Input: Please enter a numeric amount (e.g., 9500).";
    }

    let amount = Math.trunc(spendAmount);

    if (amount < 0) return "Buy something first!";
    if (amount < 5000) return `Pay Full ${amount}. Spend 5000+ for a discount.`;

   
    let rate = 0;
    if (amount <= 7000) {
        rate = 0.05; // 5%
    } else if (amount <= 9000) { 
        rate = 0.20; // 20%
    } else {
        rate = 0.40; // 40%
    }

    let finalBill = amount * (1 - rate);

    return `Your remaining bill after applying ${rate * 100}% discount is ${finalBill}`;
}


console.log(discountApplier(9000));   
console.log(discountApplier(9000.5)); 
console.log(discountApplier(10000));  
console.log(discountApplier("100"));  