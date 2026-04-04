/**
 * TOPIC: 2D Array Creation (Quadratic Time & Space)
 */

function test(n) {
    let result = []; // Empty storage
    
    // OUTER LOOP: Runs 'n' times
    for (let i = 0; i <= n; i++) {
        
        /**
         * LINEAR OPERATION INSIDE: 
         * new Array(n).fill(0) -> Ye akela 'n' operations karta hai 
         * kyunki memory mein 'n' slots book ho rahe hain.
         */
        result.push(new Array(n).fill(0)); 
    }
    return result;
}

/**
 * [ EASY EXPLANATION ]
 * * TIME: O(n^2) 
 * Kyunki hum 'n' baar loop chala rahe hain aur har baar 
 * andar ek naya 'n' size ka array bana rahe hain. 
 * (n * n operations).
 * 
 * * SPACE: O(n^2)
 * Kyunki 'result' ke andar ab (n * n) elements save hain. 
 * Agar n = 10 hai, toh 100 zeros memory mein jagah le rahe hain.
 */