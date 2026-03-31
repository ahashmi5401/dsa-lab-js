//Continue
for (let i = 0; i < 12; i++) {
    if(i == 10){  //print 0 to 11 except 10 bcz it skip due to use continue word
        continue
    }
    console.log(i);
    
}


//Break 
for (let i = 0; i < 10; i++) {
    if(i == 5 ){  //terminate loop if i become 5 due to use of break 
        break
    }
    console.log(i);
    
}