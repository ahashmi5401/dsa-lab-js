/**
 * TYPE: Insertion Sort (Manual Ascending)
 * LOGIC: Array ko do hisson mein divide karta hai (Sorted & Unsorted).
 * Har naye element ko pichle sorted elements se compare karke 
 * sahi position par "shift" karta hai.
 * * TIME: O(n^2) - Worst Case // O(n) - Best Case (Already sorted)
 * SPACE: O(1) - In-place
 */
function insertionSort(arr){
    n = arr.length
   for(let i = 1 ; i < n ; i++){
    let current = arr[i];  //arr[3] => 3
    let j = i - 1    // arr[2] => 10
    while(j >= 0 && arr[j] > current){  // true $&& true = true
        arr[j+1] = arr[j]  // arr[1] = 4 
        j--  //j hojyega -1  //j = 
    }
    arr[j+1] = current //arr[0+1] => arr[1] = arr[i] =>  arr[0] = 5
   }
   return arr
}
//[4 , 3 , 5, 10, 2 , 1, 6, 7 , 8 , 9]
let arr = [10, 5 , 4 , 3, 2 , 1, 6, 7 , 8 , 9]
let insertion = insertionSort(arr)
console.log(insertion);
