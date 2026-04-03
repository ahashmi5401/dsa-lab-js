function maxProfit(arr){
    let maxProfit = 0
    let minPrice = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(minPrice > arr[i]){
            minPrice = arr[i]
        }
        if(arr[i] - minPrice > maxProfit){
            maxProfit = arr[i] - minPrice
        }
    }
    return maxProfit
    
}
console.log(maxProfit([7 , 1 , 5 , 3 , 6 , 4]));
