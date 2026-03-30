//check eligible or not for voting by using class

class checkVote {
    constructor(age) {
        this.age = age
    }
    voterCheck () {
        if(this.age >= 18){
        return 'eligible voter'
    }
    else if (this.age < 18){
        return 'Ineligible voter'
    }else {
        return 'Invalid Input'
    }
    }
}

let ageInput = Number(prompt('Enter Your Age '))
let check1 = new checkVote(ageInput)
console.log(check1.voterCheck());


//check eligible or not for voting by using function
function voterCheck(age){
    if(age > 18){
        return 'eligible voter'
    }
    else{
        return 'Ineligible voter'
    }

}
let check = voterCheck(19)
console.log(check);
