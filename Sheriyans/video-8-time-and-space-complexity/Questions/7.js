/**
 * TOPIC: Matrix Initialization (Nested Loops)
 * Target: Understanding n^2 growth in both Time & Space
 */

function test(n) {
    let matrix = []; // 1. Initial storage start ki

    // OUTER LOOP: Runs 'n' times (Rows banata hai)
    for (let i = 0; i < n; i++) {
        matrix[i] = []; // 2. Har row ke liye ek khali array (O(1))

        // INNER LOOP: Runs 'n' times for EVERY 'i' (Columns bharta hai)
        for (let j = 0; j < n; j++) {
            // 3. Cell fill ho raha hai (i + j) se
            matrix[i][j] = i + j; 
        }
    }
    
    return matrix;
}

/**
 * [ EASY EXPLANATION / BREAKDOWN ]
 * * * TIME COMPLEXITY: O(n^2)
 * Kyunki loop ke andar loop hai aur dono 'n' tak chal rahe hain. 
 * Total operations = n * n. Agar n=100 hai, toh 10,000 bar calculation hogi.
 * * * SPACE COMPLEXITY: O(n^2)
 * Kyunki aapne ek Matrix banaya hai jo RAM mein (n * n) cells ki jagah lega.
 * Saara data 'matrix' variable mein save ho raha hai jo function khatam hone
 * ke baad bhi return ho raha hai.
 */