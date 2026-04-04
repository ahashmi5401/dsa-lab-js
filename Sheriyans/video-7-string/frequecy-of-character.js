const fre = (str) => {
    // 1. Create a "bucket" for every possible ASCII character
    let arr = new Array(128).fill(0);

    // 2. Loop through the STRING (str.length, not arr.length!)
    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i);
        arr[index] += 1; // Increment the count at that ASCII index
    }

    // 3. Loop through the ARRAY to print results
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(`${String.fromCharCode(i)} appears ${arr[i]} times`);
        }
    }
    return `Finished`;
};

console.log(fre('hello'));
