let a = 1
 
switch (a){
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    default :
    console.log('weekend');
    
}


//if 1,2,3 have i want to show same output so

let b = 2
switch (b){
    case 1:
    case 2:
    case 3:
        console.log('same content on these 3 case');
        break
    case 4:
    case 5:
    case 6:
        console.log('same content on these 3 case');
        break
        
}