/**
 * TOPIC: Constant vs Variable Loops (The Interviewer's Trap)
 * Target: Decent Package Knowledge
 */

function complexityCheck(n) {
    // OUTER LOOP: Runs 'n' times
    // Complexity: O(n)
    for (let i = 0; i < n; i++) {
        
        // INNER LOOP: Runs exactly 1000 times (FIXED)
        // Complexity: O(1000) which is CONSTANT O(1)
        // Reason: Ye 'n' pe depend nahi kar raha, data kitna bhi barh jaye
        // ye hamesha 1000 bar hi chalega.
        for (let j = 0; j < 1000; j++) {
            console.log(i + j);
        }
    }
}

/**
 * FINAL ANALYSIS:
 * Time Complexity: O(n * 1000) => O(n) [Linear Time]
 * Space Complexity: O(1) [Constant Space]
 * * RULE: Big O ignore constants (10, 100, 1000). 
 * Agar loop 'n' tak nahi ja raha, toh wo O(1) hai.
 */