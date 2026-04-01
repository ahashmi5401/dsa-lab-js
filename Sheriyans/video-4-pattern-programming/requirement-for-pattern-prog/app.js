//REQUIREMENT FOR PATTERN PROGRAMMING


//we use console.log for print 

//print second one in next line if you want to print in same line so use 
console.log('Hello');
console.log('World');

//this for print in same line but it is a part of node js so not run in window only run in 
//node enviroment 
process.stdout.write('Hello ')
process.stdout.write('Worldc \n')



//STEP 1
//download prompt first "install i prompt" or "npm install prompt-sync"
//and call 
let prompt = require('prompt-sync')()

let prompt1 = prompt('Enter Name')
console.log(prompt1);
