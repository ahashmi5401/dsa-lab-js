//number represent color like 
//0 = red
//1 = green
//2 = purple 
console.log('hy');

function sortColor(arr){
    let k = arr.length - 1;
    let j = 0;
    let i = 0
    while(i <= k){
    if(arr[i] == 0){
        console.log("mai hu " , arr[i]);
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j++
    }else if(arr[i] == 2){
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp
        k--
        //we didn't i++ bcz if k have 0 and then  we need to swap with j 
    }else{
        console.log(arr[i] , i);
        arr[i] = arr[i]
        i++
    }
   }

    return arr
}
console.log(sortColor([2 , 0 , 1 ]));
