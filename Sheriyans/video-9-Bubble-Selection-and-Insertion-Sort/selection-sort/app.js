/**
 * TYPE: Selection Sort (Manual Ascending)
 * LOGIC: Har pass mein array ka sabse chota (minimum) element 
 * dhoond kar usay shuru mein 'swap' kar diya jata hai.
 * * TIME: O(n^2) - Nested Loops
 * SPACE: O(1) - In-place (No extra array)
 */
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // 1. Assume karo ke current index hi sabse chota hai
        let minIndex = i;

        // 2. Baaki array mein check karo koi aur chota toh nahi
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                // Naya minimum mil gaya!
                minIndex = j;
            }
        }

        // 3. Agar naya minimum mila hai, toh usay 'i' ke sath swap kar do
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// System Test:
const data = [29, 10, 14, 37, 13];
console.log("SORTED_DATA:", selectionSort(data)); 
// OUTPUT: [10, 13, 14, 29, 37]

console.log(arr([3, 2 , 4 , 5 , 1]));
