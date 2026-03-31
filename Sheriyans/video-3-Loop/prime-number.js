function primeNumber(n) {
  if (isNaN(n) || n < 1) return "Enter Valid Input";
  if (n === 1) return "1 is neither prime nor composite.";
  if (n === 2) return "2 is a prime number.";

  let limit = Math.sqrt(n);
  let isPrime = true;

  // 1. Pehle sirf check karo ki prime hai ya nahi
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      isPrime = false; // Factor mil gaya!
      break;           // Loop rok do, aage check karne ki zaroorat nahi
    }
  }

  // 2. Agar Prime hai to result bhej do
  if (isPrime) {
    return `${n} is a prime number`;
  } 
  
  // 3. Agar Prime nahi hai, to factors calculate 
  else {
    let factorArr = [];
    for (let i = 1; i <= limit; i++) {
      if (n % i === 0) {
        factorArr.push(i);
        // Partner factor logic
        if (i !== n / i) {
          factorArr.push(n / i);
        }
      }
    }
    factorArr.sort((a, b) => a - b);
    return `${n} is not a prime number because it is divisible by: ${factorArr.join(', ')}`;
  }
}

console.log(primeNumber(7));  
console.log(primeNumber(10)); 



//shorter way 
function isPrime(n){
  if(n <= 1) return false
  if(n == 2) return true

  //check if even nuber is prime
  if(n % 2 == 0) return false

  //check if odd number is prime 
  //in which we use i+=2 bcz we know even can't divide odd 
  for (let i = 3; i < Math.floor(Math.sqrt(n)); i+=2) {
    if(n % i == 0) return false

  } 
  return true
}

//for loop logic if let 37 how to check prime
//-> take root of 37 is almost 6
//-> ab check karo 2 se leke iske square root tak koi ise divide kar parha hai 
//-> 2->6 agr nahi tou ise agai bhi koi number divide nahi karskta , prime number hai


let exPrime = isPrime(37)
console.log(" this is prime " , exPrime);

let exPrime1 =  isPrime(24)
console.log(" this is prime " , exPrime1);
