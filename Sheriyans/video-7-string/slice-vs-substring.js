const str = "JavaScript";

// 1. Using slice()
// slice(start, end)
console.log(str.slice(0, 4));   // "Java"
console.log(str.slice(-6));     // "Script" (Starts 6 from the end)
console.log(str.slice(4, 0));   // "" (Empty string: slice doesn't swap)

// 2. Using substring()
// substring(start, end)
console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(-6));   // "JavaScript" (Negative treated as 0)
console.log(str.substring(4, 0)); // "Java" (Swaps indices automatically)