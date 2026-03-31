function calculator() {
    let calculate = true;
    let result;

    while (calculate) {
        let choice = prompt('Enter "N" to start a calculation or "O" to exit').toUpperCase();

        if (choice === "O") {
            console.log('Exiting calculator...');
            calculate = false; 
        } else if (choice === 'N') {
            // Convert prompts to numbers right away
            let operator = +prompt('Enter: 1 (+), 2 (-), 3 (*), 4 (/)');
            let n1 = +prompt("Enter Number 1");
            let n2 = +prompt("Enter Number 2");

            // Assign result based on condition
            if (operator === 1) result = n1 + n2;
            else if (operator === 2) result = n1 - n2;
            else if (operator === 3) result = n1 * n2;
            else if (operator === 4) result = n1 / n2;
            else {
                alert("Invalid operator!");
                continue; // Skip to next loop iteration
            }

            // Show the result but don't 'return' yet so the loop can continue
            console.log(`Result: ${result}`);
            alert(`The result is: ${result}`);
            
            // If you want to stop after one successful calculation:
            // calculate = false; 
        } else {
            alert("Invalid input. Please enter N or O.");
        }
    }

    return "Final operation complete."; 
}

let cal = calculator();
console.log(cal);