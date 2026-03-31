//while: Tab use karein jab aapko pata na ho ke loop kab khatam hoga (Unknown condition).

let pin;
while (pin != "1234") {
    console.log("Incorrect PIN. Please try again: ");
    prompt("Enter Pin")
}

let playerHealth = 100;

while (playerHealth > 0) {
    let damage = Math.floor(Math.random() * 20); // Random damage
    playerHealth -= damage;
    
    console.log(`Player hit! Remaining Health: ${playerHealth}`);
    
    if (playerHealth <= 0) {
        console.log("Game Over!");
    }
}